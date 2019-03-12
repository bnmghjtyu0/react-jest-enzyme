
import axios from 'axios'

const _getParkingApi = (event) => {
    let set = axios({
        method: "get",
        url: `https://gank.io/api/random/data/福利/${event}`
    })
    return set
}

export default _getParkingApi