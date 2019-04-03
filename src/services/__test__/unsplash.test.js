import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import unsplash from '../unsplash';

describe('unsplash', () => {
    test('returns data when sendMessage is called', done => {

        // 使用 MockAdapter 可以建立假的 get api
        var mock = new MockAdapter(axios);
        const data = { results: ["cat.jpg"] }
        mock.onGet('https://api.unsplash.com/search/photos').reply(200, data);

        // axios.get 上面連結，回傳 data 的值
        axios.get('https://api.unsplash.com/search/photos')
            .then(res => {
                console.log(res)
            })

        unsplash.sendMessage('cats').then(response => {
            expect(response).toEqual(data);
            done();
        });
    });
});