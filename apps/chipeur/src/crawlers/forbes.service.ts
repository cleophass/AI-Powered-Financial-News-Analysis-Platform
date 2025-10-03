import { Readability } from '@mozilla/readability';
import { Injectable, Logger } from '@nestjs/common';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import tz from 'dayjs/plugin/timezone';
import { JSDOM, VirtualConsole } from 'jsdom';
import { env } from '../env';
import type { Article } from '../types';
import { CrawlerService } from './crawler.service';

dayjs.extend(customParseFormat);
dayjs.extend(tz);

// Créer une console virtuelle pour ignorer les erreurs CSS
const virtualConsole = new VirtualConsole();
virtualConsole.on('error', () => {
  // Ignorer les erreurs (notamment les erreurs CSS)
});

@Injectable()
export class ForbesCrawlerService extends CrawlerService {
  protected async getUrls(): Promise<string[]> {
    const re = /https:\/\/www\.forbes\.com\/sites\/[\dA-Za-z-]+\/\d{4}\/\d{2}\/\d{2}\/[\dA-Za-z-]+\//;
    const htmlLinks: string[] = [];

    await Promise.all(
      env.CHIPEUR_FORBES_URLS.map(async (forbesUrl) => {
        const req = await fetch(forbesUrl);
        const dom = new JSDOM(await req.text(), { virtualConsole }).window.document;

        htmlLinks.push(
          ...[...dom.querySelectorAll('a[data-ga-track]')]
            .map((elem) => elem.getAttribute('href') ?? '')
            .filter((href) => re.test(href)),
        );
      }),
    );

    return [...new Set(htmlLinks)];
  }

  protected async getArticle(url: string): Promise<Article> {
    Logger.log(`📖 Scraping article: ${url}`);
    const req = await fetch(url);
    const dom = new JSDOM(await req.text(), { virtualConsole });
    const article = new Readability(dom.window.document).parse();

    if (article === null) {
      // throw new Error('Article is null');
      return {
        title: '',
        text: '',
        url,
        publicationDate: this.getDate(dom, url),
      };
    }

    return {
      title: article.title,
      text: article?.textContent ?? '',
      url,
      publicationDate: this.getDate(dom, url),
    };
  }

  private getDate(dom: JSDOM, url: string): Date {
    const dateElements = [
      ...dom.window.document.querySelectorAll('div.top-contrib-block time, div.top-contrib-block__premium time'),
    ];
    
    const dateText = dateElements
      .map((node) => node.textContent ?? '')
      .join(' ');

    Logger.log(`🔍 Date text found for ${url}: "${dateText}"`);

    if (!dateText) {
      Logger.warn(`⚠️  No date found in article ${url}, using current date as fallback`);
      return new Date();
    }

    const parsedDate = dayjs(dateText, 'MMM D, YYYY, hh:mma', false);
    
    if (!parsedDate.isValid()) {
      Logger.warn(`⚠️  Could not parse date: "${dateText}" for ${url}, using current date as fallback`);
      return new Date();
    }

    Logger.log(`✅ Parsed date: ${parsedDate.toISOString()}`);
    return parsedDate.toDate();
  }
}
