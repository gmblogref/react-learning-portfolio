import type { Post } from "./types";

export async function getPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    if (!response.ok) {
        throw new Error('Failed to fetch posts.');
    }

    const postData: Post[] = await response.json();

    return postData;
}