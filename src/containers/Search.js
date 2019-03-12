import React from "react";
import Search from "../components/Search";
import _getParkingApi from "../api/"

class SearchContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }
    componentWillMount() {
        this.performSearch()
    }
    performSearch = async (event) => {
        const res = await _getParkingApi(event);
        this.setState({ articles: res.data.results })
    }

    render() {
        return (
            <Search
                performSearch={this.performSearch}
                articles={this.state.articles}
            />
        )
    }
}

export default SearchContainer;