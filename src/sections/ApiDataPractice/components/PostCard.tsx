import type { Post } from ".././types";
import './PostCard.css';

type PostCardProps = {
    post: Post;
}

function PostCard({ post }: PostCardProps) {
    return (
        <article className="post-card">
            <h3 className="post-card__title">{post.title}</h3>
            <p className="post-card__body">{post.body}</p>
        </article>
    );
}

export default PostCard