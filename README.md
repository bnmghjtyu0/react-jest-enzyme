## sinon.stub

```js
    test("方法一: 使用 sinon.stub 不執行原本的程式碼", async () => {
        const promise = Promise.resolve();
        // sinon.stub = 不執行原本的程式碼
        sinon.stub(global, 'fetch').callsFake(promise)
        const wrapper = mount(<SearchContainer />)
        return promise.then(() => {
            expect(wrapper.state()).toHaveProperty('articles', []);
            wrapper.update();
        }).then(() => {
            expect(wrapper.state().articles).toHaveLength(0)
        });
    })
```


## 參考文章
https://blog.bitsrc.io/how-to-test-react-components-using-jest-and-enzyme-fab851a43875

async 教學文
https://www.gabrielnordeborn.se/testing-async-react-components-with-enzyme-and-jest/
https://github.com/airbnb/enzyme/issues/346

關於 sinon
https://blog.kazaff.me/2016/11/11/%E8%AF%91-Sinon%E5%85%A5%E9%97%A8%EF%BC%9A%E5%88%A9%E7%94%A8Mocks%EF%BC%8CSpies%E5%92%8CStubs%E5%AE%8C%E6%88%90javascript%E6%B5%8B%E8%AF%95/