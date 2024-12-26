import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';


export const Client = createClient({
  apiVersion: '2023-05-03',
  dataset: 'production',
  projectId: 'itaimjg6',
  useCdn: false,
});

// Ensure proper typing of builder with ImageUrlBuilder
const builder = imageUrlBuilder(Client);

// Define the function with correct typing for the source parameter
export function urlFor(source: { _type: 'image'; asset: { _ref: string } }) {
  return builder.image(source);
}
