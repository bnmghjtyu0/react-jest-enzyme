const range = n => [...Array(n).keys()];

const fetchArticles = () => {
    return Promise.resolve({
        response: {
            results: range(10).map(i => ({
                url: `https://abc${i}.com`,
                who: `Some User ${i}`
            }))
        }
    })
}
export default fetchArticles