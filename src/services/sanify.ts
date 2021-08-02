import sanityClient, { ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  apiVersion: 'v1',
  dataset: process.env.SANITY_STUDIO_API_DATASET || 'empty',
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || 'empty',
  token: process.env.SANITY_STUDIO_API_TOKEN || 'empty',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanity = sanityClient(config);

export default sanity;
