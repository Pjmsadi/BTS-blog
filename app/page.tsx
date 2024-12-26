import { Card, CardContent } from '@/components/ui/card';
import { Client } from './lib/sanity'; // Sanity client import
import imageUrlBuilder from '@sanity/image-url'; // Sanity image URL builder
import Image from 'next/image'; // Next.js Image component
import { Any } from 'next-sanity';

// Image URL builder setup
const builder = imageUrlBuilder(Client);

// Ye function Sanity image ka URL banayega
export function urlFor(source: Any) {
  return builder.image(source);
}

// Data fetch karne ka function
async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }
  `;
  const data = await Client.fetch(query);
  return data;
}

// Home Component
export default async function Home() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post: Any, idx: number) => (
        <Card key={idx}>
          {/* Blog Image */}
          <Image
            src={urlFor(post.titleImage).url()} // Generate URL
            alt="image" // Default alt text
            width={400} // Image width
            height={300} // Image height
            className= "rounded-t-lg h-[200px] object-cover"
          />
          <CardContent className= "mt-3">
          <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
    <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
      {post.smallDescription}
    </p>
    <a 
      href={`/blog/${post.currentSlug}`} 
      className="w-full mt-7 inline-block bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600"
    >
      Read more
    </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
