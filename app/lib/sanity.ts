import {createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const Client = createClient({
  apiVersion: '2023-05-03',
  dataset: 'production',
  projectId: 'itaimjg6',
  useCdn: false,
});

const builder = imageUrlBuilder(Client)

export function urlFor(source:any) {
  return builder.image(source);
}
