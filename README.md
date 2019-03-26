## axios async get

## 測試 api
```
https://api.unsplash.com/search/photos?client_id=4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964&query=term
```


### 1/3 unsplash.test.js

```js
import * as api from '../unsplash';
jest.setTimeout(30000);
describe('API Auth', () => {

    describe('login', () => {

        it('has a happy path', async () => {

            const response = await api.login();
            const status = response.status
            expect(status).toEqual(200);

        });
    });
});
```

### 2/3 unsplash.js
```js
import asyncFetch from './async-fetch';

export const login = async () => {

    const url = 'https://api.unsplash.com/search/photos?client_id=4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964&query=Mountains';

    const requestConfig = {
        method: 'GET'
    };

    const response = await asyncFetch(url, requestConfig);

    return await response
}
```

### 3/3 async-fetch.js

```js

export default async function asyncFetch(url, requestConfig = {}) {

  const response = await fetch(url, requestConfig);

  const isSuccess = response.status >= 200 && response.status < 300;

  if (isSuccess) {
    return response;
  }
}

```


## 相關套件

### `axios-mock-adapter`
```
npm install --save axios-mock-adapter
```

## 參考文章
https://codereviewvideos.com/course/react-redux-and-redux-saga-with-symfony-3/video/getting-started-with-jest-mocks
