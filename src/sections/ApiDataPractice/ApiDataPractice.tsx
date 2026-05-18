import { useCallback, useEffect, useState } from "react";
import './ApiDataPractice.css';
import PostList from "./components/PostList";
import { getPosts } from "./postsApi";
import type { Post } from "./types";

function ApiDataPractice() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [hasFetched, setHasFetched] = useState<boolean>(false);
    const buttonText = isLoading
        ? 'Loading...'
        : hasFetched
            ? 'Refresh Posts'
            : 'Fetch Posts';

    const loadPosts = useCallback(async () => {
        setIsLoading(true);
        setErrorMessage('');
        setHasFetched(false);

        try {
            const postData = await getPosts();
            setPosts(postData);
        }
        catch {
            setErrorMessage('Something went wrong while fetching posts.');
        }
        finally {
            setIsLoading(false);
            setHasFetched(true);
        }
    }, [])

    useEffect(() => {
        loadPosts()
    }, [loadPosts])

    return (
        <section className="api-data-practice">
            <div className="api-data-practice__header">
                <h1>API Data Practice</h1>
                <p>This section is for practicing fetching and displaying data from APIs.</p>
            </div>

            <button
                type="button"
                className="api-data-practice__button"
                onClick={loadPosts}
                disabled={isLoading}
            >
                {buttonText}
            </button>

            {isLoading && (
                <p className="api-data-practice__message">Loading Posts...</p>
            )}

            {errorMessage && (
                <p className="api-data-practice__message api-data-practice__error">{errorMessage}</p>
            )}

            {hasFetched && !isLoading && !errorMessage && posts.length > 0 && (
                <p className="api-data-practice__message">
                    Loaded {posts.length} posts.
                </p>
            )}

            <PostList posts={posts} hasFetched={hasFetched} />

        </section>
    );
}

export default ApiDataPractice