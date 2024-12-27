import { Card, CardContent } from '@/components/ui/card';
import { Client } from './lib/sanity'; // Sanity client import
import imageUrlBuilder from '@sanity/image-url'; // Sanity image URL builder
import Image from 'next/image'; // Next.js Image component

// Image URL builder setup
const builder = imageUrlBuilder(Client);

// Function to generate Sanity image URL
export function urlFor(source: any) {
  return builder.image(source).url();
}

// Function to fetch data
async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }
  `;
  return await Client.fetch(query);
}

// Home Component
export default async function Home() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post: any, idx: number) => (
        <Card key={idx}>
          {/* Blog Image */}
          <Image
            src={urlFor(post.titleImage)} // Generate URL
            alt={post.title} // Use post title as alt text
            width={400} // Image width
            height={300} // Image height
            className="rounded-t-lg h-[200px] object-cover"
          />
          <CardContent className="mt-3">
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
            {/* Comment Section */}
            <div className="mt-5">
              <h4 className="text-md font-semibold">Comments</h4>
              <textarea
                className="w-full mt-2 p-2 border rounded"
                placeholder="Add a comment..."
              ></textarea>
              <button
                className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
              >
                Submit
              </button>
              <div className="mt-4">
                {/* Placeholder for comments */}
                <p className="text-sm text-gray-600 dark:text-gray-300">No comments yet.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
