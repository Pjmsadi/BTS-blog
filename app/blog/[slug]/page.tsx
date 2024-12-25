import { fullBlog } from "@/app/lib/interface";
import { Client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";

async function getData(slug:string) {
    const query =`*[_type =="blog"&& slug.current == '${slug}']{
"currentSlug": slug.current,
  title,
  content,
  titleImage
}[0]`;
const data = await Client.fetch(query);
return data;
}
export default async function BlogArticle({params}:{params:{slug:string}}){
    const data: fullBlog = await getData(params.slug);
  return (
    <div className="mt-8">
        <h1>
            <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">Bangtan Sonyeondan - Blog</span>
            <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
        </h1>
        <img
      src={urlFor(data.titleImage).url()}
      width={800}
      height={800}
      alt="Title Image"
      className="rounded-lg mt-8 border"
    />
    <div className="mt-16 prose-blue prose-xl dark:prose-invert prose-headings:underline prose-li:marker:text-primary prose-a:text-primary">
    <PortableText value={data.content}/>
    </div>
    </div>
  )
}