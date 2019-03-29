import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import unsplash from '../unsplash';

describe('unsplash', () => {
    it('returns data when sendMessage is called', done => {
        var mock = new MockAdapter(axios);
        const data = { results: ["cat.jpg"] }
        mock.onGet('https://api.unsplash.com/search/photos').reply(200, data);
        unsplash.sendMessage('cats').then(response => {
            expect(response).toEqual(data);
            done();
        });
    });
});