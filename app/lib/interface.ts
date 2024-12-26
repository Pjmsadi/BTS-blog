import { Any } from "next-sanity";

export interface simpleBlogCard{
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: Any;
}
export interface fullBlog {
    currentSlug: string;
    title: string;
    content: Any;
    titleImage: Any;

}