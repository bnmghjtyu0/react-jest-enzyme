import axios from 'axios';

export default {
    async fetchPostsList(method, callback) {
        return axios.get(`https://jsonplaceholder.typicode.com${method}`).then(res => {
            return callback(res);
        })
    }
}