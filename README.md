## axios-mock-adapter

### 1/2 unsplash.test.js

```js
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

```

### 2/2 unsplash.js
```js
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
```

## 相關套件

### `axios-mock-adapter`
```
npm install --save axios-mock-adapter
```

## 參考文章
https://medium.com/@zach.grusznski/how-to-use-axios-mock-adapter-to-test-network-requests-in-react-475e99cda5ea

https://blog.bitsrc.io/how-to-test-react-components-using-jest-and-enzyme-fab851a43875

async 教學文
https://www.gabrielnordeborn.se/testing-async-react-components-with-enzyme-and-jest/
https://github.com/airbnb/enzyme/issues/346

關於 sinon
https://blog.kazaff.me/2016/11/11/%E8%AF%91-Sinon%E5%85%A5%E9%97%A8%EF%BC%9A%E5%88%A9%E7%94%A8Mocks%EF%BC%8CSpies%E5%92%8CStubs%E5%AE%8C%E6%88%90javascript%E6%B5%8B%E8%AF%95/