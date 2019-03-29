import axios from 'axios';

function sendMessage(term) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: 'https://api.unsplash.com/search/photos',
            params: {
                query: term
            }
        }).then(({ status, data }) => {
            if (status === 200) {
                resolve(data);
            } else {
                reject(new Error('error'));
            }
        });
    });
}

export default {
    sendMessage
};