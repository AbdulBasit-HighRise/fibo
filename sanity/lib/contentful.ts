import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  environment: 'master',
});

// Saare blogs fetch karne ka function
export async function getBlogs() {
  const response = await contentfulClient.getEntries({
    content_type: 'blog', // Jo humne model ka naam rakha tha
  });
  return response.items;
}