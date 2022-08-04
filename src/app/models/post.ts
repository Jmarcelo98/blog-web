import { Category } from "./category";

export class Post {
    id: number;
    thumbnail: string[];
    description: string;
    title: string;
    content: string;
    isPublished: boolean;
    publishedAt: Date;
    createdAt: Date;
    updatedAt: Date
    category: Category
}