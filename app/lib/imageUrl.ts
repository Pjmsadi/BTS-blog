
import imageUrlBuilder from '@sanity/image-url';

import { Client } from './sanity'; // Import the Sanity client



const builder = imageUrlBuilder(Client);



export function urlFor(source: any) {

  return builder.image(source);

}
//