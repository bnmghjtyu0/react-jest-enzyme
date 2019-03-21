import React from "react";
import _getParkingApi from "../api/"
import axios from 'axios'
class SearchContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rate: ""
        }
    }
    componentDidMount() {
        this.getData()
    }
    async getData() {
        const result = await _getParkingApi("/v1/bpi/currentprice.json");
        this.setState({ rate: result.data.bpi.USD.rate_float });
    }
    render() {
        return (
            <div>
                <button data-test="btn-click" className="btn" onClick={this.getData}>
                    GET DATA
                  </button>
                <h1>{this.state.rate}</h1>
            </div>
        )
    }
}

export default SearchContainer;