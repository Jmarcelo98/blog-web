import { User } from "./user";

export class CommentClass {
    id: number;
    comment: string;
    createdAt: Date;
    user: User
}