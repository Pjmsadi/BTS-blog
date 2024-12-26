import { fullBlog } from "@/app/lib/interface";
import { Client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from 'next/image';


async function getData(slug: string): Promise<fullBlog | null> {
  // Use a parameterized query to prevent injection risks
  const query = `
    *[_type == "blog" && slug.current == $slug]{
      "currentSlug": slug.current,
      title,
      content,
      titleImage
    }[0]
  `;
  const data = await Client.fetch(query, { slug });
  return data;
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
  const data: fullBlog | null = await getData(params.slug);

  if (!data) {
    return (
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold">Blog not found</h1>
        <p className="mt-4">Sorry, the blog you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Bangtan Sonyeondan - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt={data.title || "Title Image"}
        className="rounded-lg mt-8 border"
        priority
      />
      <div className="mt-16 prose-blue prose-xl dark:prose-invert prose-headings:underline prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
