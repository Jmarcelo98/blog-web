import { Category } from "./category";
import { CommentClass } from "./comment";
import { User } from "./user";

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
    comments: CommentClass[]
    user: User
}