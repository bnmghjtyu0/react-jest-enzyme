const _getParkingApi = () => {
    return Promise.resolve({
        response: {
            bpi: { USD: { rate_float: 5 } }
        }
    })
}
export default _getParkingApi