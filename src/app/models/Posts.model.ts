export interface Post {
    id?: number;
    author: string;
    date: Date;
    caption?: string,
    image?: string;
    likes: number;
    comments: any;
    isLiked: boolean;
}