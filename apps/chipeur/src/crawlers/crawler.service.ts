import { Logger } from '@nestjs/common';
import type { Article } from '../types';

export abstract class CrawlerService {
  public async crawl(startDate: Date, endDate: Date): Promise<Article[]> {
    Logger.log(`🔍 Starting crawl from ${startDate.toISOString()} to ${endDate.toISOString()}`);
    
    const urls = await this.getUrls();
    Logger.log(`🔗 Found ${urls.length} URL(s) to scrape`);

    const articles = await Promise.all(urls.map(async (url) => await this.getArticle(url)));
    Logger.log(`📄 Scraped ${articles.length} article(s)`);

    // Log des dates pour debug
    articles.forEach((article, index) => {
      const dateStr = article.publicationDate instanceof Date && !isNaN(article.publicationDate.getTime())
        ? article.publicationDate.toISOString()
        : 'Invalid Date';
      Logger.log(`Article ${index + 1}: "${article.title.substring(0, 50)}..." - Date: ${dateStr}`);
    });

    const filteredArticles = articles.filter((article) => article.publicationDate >= startDate && article.publicationDate <= endDate);
    Logger.log(`✅ ${filteredArticles.length} article(s) match the date range`);

    return filteredArticles;
  }

  protected abstract getUrls(): Promise<string[]>;
  protected abstract getArticle(url: string): Promise<Article>;
}
