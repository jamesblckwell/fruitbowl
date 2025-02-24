import type Post from "$types/Post"

export const fetchPosts = async () => {
    const allPostsFiles = import.meta.glob('/src/recipes/*.json')
    const iterablePosts = Object.entries(allPostsFiles)

    const allPosts = await Promise.all(
        iterablePosts.map(async ([path, resolver]) => {
            const metadata = await resolver() as Post;
            const postPath = path.slice(4, -5)

            return {
                title: metadata.title,
                description: metadata.description,
                serves: metadata.serves,
                category: metadata.category,
                tags: metadata.tags,
                date: metadata.date,
                path: postPath,
            }
        })
    )
    return allPosts
}
