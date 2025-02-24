import type { PageLoad } from '../../category/[category]/$types';
import type Post from '$types/Post';

export const load: PageLoad = async ({ params, fetch }) => {
    const { category } = params;
    const response = await fetch('/api/posts')
    const allPosts = await response.json()

    const posts = allPosts.filter((post: Post) => post.category.includes(category))
    return { category, posts };
};

