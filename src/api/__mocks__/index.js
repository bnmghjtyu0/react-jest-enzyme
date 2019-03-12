const range = n => [...Array(n).keys()];


const _getParkingApi = () => {
    return Promise.resolve({
        response: {
            data: {
                results: range(10).map(i => ({
                    url: `https://abc${i}.com`,
                    who: `Some User ${i}`
                }))
            }
        }
    })
}
export default _getParkingApi