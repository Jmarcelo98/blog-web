import { Category } from "./category";

export class PostInput {
    title: string;
    description: string;
    content: string;
    isPublished: boolean;
    thumbnail: any;
    category: Category
}