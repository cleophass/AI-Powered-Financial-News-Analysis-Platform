import { date, urlArray } from '@straufi/env-utils';

import { cleanEnv, str, url } from 'envalid';

export const env = cleanEnv(process.env, {
  CHIPEUR_SOURCE: str({ choices: ['forbes'], desc: 'Source to scrape articles from.' }),
  CHIPEUR_START_DATE: date({ desc: 'Start date for scraped articles.', default: new Date('2025-09-26') }),
  CHIPEUR_END_DATE: date({ desc: 'End date for scraped articles.', default: new Date('2025-10-03') }),
  CHIPEUR_FORBES_URLS: urlArray({ desc: 'Forbes URLs to scrape articles from.' }),

  ABACUS_URL: url(), // jsp si c'est le bon
  OLLAMA_EMBEDDING_MODEL: str(),
  OLLAMA_URL: url(),
  OPEN_AI_KEY: str(),
});
