export const impactAnalysisSchema = {
  title: 'impactAnalysisSchema',
  description: 'A JSON object representing the financial impact of topics',
  type: 'object',
  properties: {
    result: {
      type: 'object',
      description: 'A dictionary of financial topics with detailed description and impact scores',
      additionalProperties: {
        type: 'object',
        properties: {
          description: {
            type: 'string',
            description: 'Comprehensive description of financial topic and impact timeframe',
          },
          score: {
            type: 'number',
            minimum: -1,
            maximum: 1,
            description: 'Numerical impact score from -1 (very negative) to 1 (very positive)',
          },
        },
        required: ['description', 'score'],
      },
    },
  },
  required: ['result'],
};
