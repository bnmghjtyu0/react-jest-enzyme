## axios async get

## 測試 api
```
https://api.unsplash.com/search/photos?client_id=4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964&query=term
```


### 1/5 Search.test.js

```js
import React from 'react'
import { shallow } from "enzyme";
import { findByTestAttr } from '../../test/testUtils';
import Search from './Search'
import api from '../services/unsplash'

jest.mock("../services/unsplash");

test("fetches images from unsplash and renders them on mount", done => {
    const wrapper = shallow(<Search />);
    setTimeout(() => {
        wrapper.update();

        const state = wrapper.instance().state;
        console.log(state)
        expect(state.term).toEqual("Mountains");
        expect(state.status).toEqual("done");
        expect(state.images.length).toEqual(1);
        done();
    });
});
```

### 2/5 Search.js
```js
import React from "react";
import unsplash from "../services/unsplash"
import axios from 'axios'
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
            console.log(images)
            this.setState({
                status: "done",
                images: images
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

export default Search;
```

### 3/5 services/unsplash.js

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

  return response.data.results;
};
```
### 4/5 services/__mock__/unsplash.js

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

### 5/5 setupTest.js

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

## 相關套件

### `axios-mock-adapter`
```
npm install --save axios-mock-adapter
```

## 參考文章
https://www.leighhalliday.com/testing-asynchronous-components-mocks-jest

## 其他相關
mockImplementationOnce: https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions
