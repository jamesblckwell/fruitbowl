import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    return {
        title: 'Test Page',
        content: 'This is some test content.'
    };
};

