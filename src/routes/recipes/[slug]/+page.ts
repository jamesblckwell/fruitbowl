import type { PageLoad } from './$types';
import type Post from '$types/Post';

export const load: PageLoad = async ({ params }) => {
    const post: Post = await import(`../../../recipes/${params.slug}.json`);

    return {
        ...post
    };
};
