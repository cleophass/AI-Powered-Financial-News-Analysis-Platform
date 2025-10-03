// import { ChatMistralAI } from '@langchain/mistralai';

import { ChatOpenAI } from '@langchain/openai';
import { env } from '../env';
import { impactAnalysisSchema } from '../lib/impact-json.module';

export const mistralChain = new ChatOpenAI({
  model: 'gpt-4o-mini',
  temperature: 0,
  apiKey: env.OPEN_AI_KEY,
}).withStructuredOutput(impactAnalysisSchema);
