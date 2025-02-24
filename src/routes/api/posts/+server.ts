import type { RequestHandler } from './$types';
import { fetchPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    const allPosts = await fetchPosts()
    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return json(sortedPosts)
};

