
import axios from 'axios'

const _getParkingApi = (params) => {
    let set = axios({
        method: "get",
        url: `https://api.coindesk.com/${params}`
    })
    return set
}

export default _getParkingApi