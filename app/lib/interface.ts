import { Any } from "next-sanity";

export interface simpleBlogCard{
    title: string;
    smallDescription: String;
    currentSlug: String;
    titleImage: Any;
}
export interface fullBlog {
    currentSlug: string;
    title: string;
    content: any;
    titleImage: any;

}