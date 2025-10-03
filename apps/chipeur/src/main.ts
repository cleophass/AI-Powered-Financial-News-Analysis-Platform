import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BillyService } from './crawlers/billy.service';
import { ForbesCrawlerService } from './crawlers/forbes.service';
import { env } from './env';

const sourceServiceMap = {
  forbes: ForbesCrawlerService,
};

export const handler = async () => {
  const appContext = await NestFactory.createApplicationContext(AppModule);

  Logger.log(`Starting chipeur with source: ${env.CHIPEUR_SOURCE}`);

  const crawlerService = appContext.get(sourceServiceMap[env.CHIPEUR_SOURCE]);
  const articles = await crawlerService.crawl(env.CHIPEUR_START_DATE, env.CHIPEUR_END_DATE);

  Logger.log(`📰 Found ${articles.length} article(s) to process`);

  const billyService = appContext.get(BillyService);
  const articlesList = await billyService.processArticles(articles);

  Logger.log(`✅ Processed ${articlesList.length} article(s)`);
  Logger.log('\n📊 Results:');
  Logger.log(JSON.stringify(articlesList, null, 2));

  // Fermer l'application proprement
  await appContext.close();
};

void handler();
