## axios async get

## 測試 api
```
https://api.unsplash.com/search/photos?client_id=4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964&query=term
```


### 1/6 Search.test.js

```js
import React from 'react'
import { shallow } from "enzyme";
import { findByTestAttr } from '../../test/testUtils';
import Search from './Search'
import api from '../services/unsplash'
import { MemoryRouter } from 'react-router'
import axios from 'axios'

const wrapper = mount(
    <MemoryRouter>
        <Search />
    </MemoryRouter>);
test("try success", async () => {
    // 1. state.images 沒有資料
    // console.log(wrapper.find('Search').instance().state.images)


    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            client_id:
                "4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964",
            query: 'Mountains'
        }
    })
    expect(res.status).toBe(200);
    const data = res.data.results
    // 2. state.images 取得資料
    wrapper.find('Search').instance().state.images
    expect(wrapper.find('Search').instance().state.images).toEqual(data)
})
test("catch error", async () => {
    // 1. state.images 沒有資料
    // console.log(wrapper.find('Search').instance().state.images)
    const res = await axios.get('https://api.unsplash.com/search/photos')
    expect(res.status).toBe(401);

})

```

### 2/6 Search.js
```js
import React from "react";
import unsplash from "../services/unsplash"
import axios from 'axios'
import WithLayout from './WithLayout'
class Search extends React.Component {
    state = {
        term: "",
        images: [],
        status: "initial",
        test: []
    };
    componentDidMount() {
        this.fetchImages("Mountains");
    }

    fetchImages = async term => {
        this.setState({
            status: "searching",
            term: term,
            images: [],
            test: [{ id: 1 }]
        });

        try {
            const images = await unsplash(term);
            this.setState({
                status: "done",
                images: images.data.results
            });
        } catch (error) {
            this.setState({
                status: "error"
            });
        }
    };


    render() {
        const { term, status, images } = this.state
        return (
            <div className="App">
                {images.map(image => <img src={image.urls.full} key={image.id} className="img-fluid" />)}
            </div>
        )
    }
}

export default WithLayout(Search);
```

### 3/6 services/unsplash.js

```js


import axios from "axios";

export default async term => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id:
        "4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964",
      query: term
    }
  });

  return response;
}
```
### 4/6 services/__mock__/unsplash.js

使用 jest.mock('../api') 調用
```js
const fakeData = [
    {
        id: 1,
        categories: [{ title: "Nice image" }],
        user: {
            name: "Mr. Photographer"
        },
        links: {
            html: "https://www.leighhalliday.com"
        },
        urls: {
            small: "https://www.image.com/nice.jpg"
        },
        likes: 10
    }
];

export default async term => {
    return await new Promise(resolve => {
        resolve(fakeData);
    });
};
```

### 5/6 setupTest.js

```js
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

// Set the default serializer for Jest to be the from enzyme-to-json
// This produces an easier to read (for humans) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
```

### 6/6 package.json

```json
  "jest": {
    "testURL": "https://api.unsplash.com"
    }
```

## 相關套件

### `axios-mock-adapter`
```
npm install --save axios-mock-adapter
```

## 參考文章
https://www.leighhalliday.com/testing-asynchronous-components-mocks-jest

## 其他相關
mockImplementationOnce: https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions
