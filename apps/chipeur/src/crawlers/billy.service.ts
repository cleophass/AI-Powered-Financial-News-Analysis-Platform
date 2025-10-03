import { Injectable, Logger } from '@nestjs/common';
import { GrpcAbortedException } from 'nestjs-grpc-exceptions';
import { env } from '../env';
import { mistralChain } from '../models/models';
import type { Article } from '../types';

export interface ArticleResult {
  title: string;
  text: string;
  url: string;
  publicationDate: Date;
  topics: Topic[];
}

export interface Topic {
  name: string;
  impact: number;
  embedding: number[];
}

@Injectable()
export class BillyService {
  public async processArticles(articles: Article[]): Promise<ArticleResult[]> {
    const results: ArticleResult[] = [];

    Logger.log(`🚀 Début de l'analyse financière de ${articles.length} article(s)...`);

    for (const article of articles) {
      Logger.log(`\n📰 Analyse de l'article: "${article.title}"`);

      const prompt = [
        {
          role: 'system',
          content: `You are an expert in financial impact analysis. Analyze the following article and identify key financial topics.

          Requirements:
          - Return a strictly valid JSON object with this structure:
          {
            "result": {
              "Topic name": {
                "description": "Detailed financial impact description, including expected timeframe",
                "score": (-1 to 1 numerical impact score), -0.7 for example if it is a highly negative impact
              },
              "Topic name": {
                "description": "Detailed financial impact description, including expected timeframe",
                "score": (-1 to 1 numerical impact score), 0.8 for example if it is a highly positive impact
              }
            }
          }

          Return only valid JSON, without any additional text.`,
        },
        {
          role: 'user',
          content: article.text,
        },
      ];

      Logger.log(`🤖 Analyse des impacts financiers en cours...`);
      const impactAnalysis = await mistralChain.invoke(prompt);

      if (!impactAnalysis.result) {
        Logger.warn(`⚠️  Aucun impact financier détecté pour cet article`);
        continue;
      }

      const topicCount = Object.keys(impactAnalysis.result).length;
      Logger.log(`✅ ${topicCount} impact(s) financier(s) identifié(s):`);

      // Afficher les topics au format JSON propre
      const topicsJson: Record<string, { description: string; impact: number }> = {};
      Object.keys(impactAnalysis.result).forEach((topic) => {
        const topicData = impactAnalysis.result[topic];
        topicsJson[topic] = {
          description: topicData.description,
          impact: topicData.score,
        };
      });
      Logger.log(JSON.stringify(topicsJson, null, 2));

      const topicsWithDescriptions = Object.keys(impactAnalysis.result).map((topic) => {
        const topicData = impactAnalysis.result[topic];
        return `${article.title}, ${topic}. ${topicData.description}`;
      });

      Logger.log(`🔢 Génération des embeddings pour ${topicCount} topic(s)...`);
      const topicEmbeddings = await this.getTopicsEmbeddings(topicsWithDescriptions);
      Logger.log(`✅ Embeddings générés avec succès`);

      const articleResult: ArticleResult = {
        title: article.title,
        text: article.text,
        url: article.url,
        publicationDate: article.publicationDate,
        topics: Object.keys(impactAnalysis.result).map((topic) => {
          const topicKey = `${article.title}, ${topic}. ${impactAnalysis.result[topic].description}`;

          return {
            name: topic,
            impact: impactAnalysis.result[topic].score,
            embedding: topicEmbeddings[topicKey] || [],
          };
        }),
      };

      results.push(articleResult);
    }

    Logger.log(`🎯 Analyse terminée: ${results.length} article(s) traité(s) avec succès`);
    return results;
  }

  private async getOllamaEmbedding(text: string): Promise<number[]> {
    const requestBody = {
      model: env.OLLAMA_EMBEDDING_MODEL,
      prompt: text,
    };

    const startTime = Date.now();
    const response = await fetch(env.OLLAMA_URL + '/api/embeddings', {
      method: 'POST',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    const duration = Date.now() - startTime;

    if (!response.ok) {
      Logger.error(`❌ Erreur lors de la génération d'embedding: ${response.status} ${response.statusText}`);
      throw new GrpcAbortedException(`Error while requesting Ollama: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data.embedding;
  }

  private async getTopicsEmbeddings(topics: string[]): Promise<Record<string, number[]>> {
    const embeddings: Record<string, number[]> = {};
    await Promise.all(
      topics.map(async (topic) => {
        embeddings[topic] = await this.getOllamaEmbedding(topic);
      }),
    );
    return embeddings;
  }
}
