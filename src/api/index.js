const fetchArticles = event => {
    return fetch(
        `https://gank.io/api/random/data/福利/${event}`
    ).then(response => response.json())
}
export default fetchArticles