import { Client } from '@elastic/elasticsearch';

const client = new Client({
  node: 'https://...', // Elasticsearch endpoint
  auth: {
    apiKey: {
      id: process.env.ELASTIC_ID, // API key ID
      api_key: process.env.ELASTIC_API_KEY, // API key secret
    }
  }
});

export default client;
