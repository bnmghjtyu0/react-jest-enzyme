import asyncFetch from './async-fetch';

export const login = async () => {

    const url = 'https://api.unsplash.com/search/photos?client_id=4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964&query=Mountains';

    const requestConfig = {
        method: 'GET'
    };

    const response = await asyncFetch(url, requestConfig);

    return await response
}