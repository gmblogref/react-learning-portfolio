import type { Post } from "./../types";
import PostCard from "./PostCard";
import './PostList.css';

type PostListProps = {
    posts: Post[];
    hasFetched: boolean;
}

function PostList({ posts, hasFetched }: PostListProps) {
    if (hasFetched && posts.length === 0) {
        return <p className="post-list__empty">No posts to display.</p>
    }

    return (
        <div className="post-list">
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    )
}

export default PostList