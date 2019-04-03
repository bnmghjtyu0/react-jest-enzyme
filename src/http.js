import axios from 'axios';

export default {
    async fetchPostsList(method, callback) {
        return axios.get(method).then(res => {
            console.log(res)
            return callback(res);
        })
    }
}