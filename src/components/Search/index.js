import React from 'react';
import PropTypes from 'prop-types'
import SearchResults from '../SearchResults'

class Search extends React.Component {
    state = {
        value: ''
    }
    handleChange = event => {
        let value = event.target.value;
        this.setState({ value })
        this.props.performSearch(value)
    }
    handleSubmit = event => {
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <h1>The Guardian Search App</h1>
                <form>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>
                <div>
                    <SearchResults articles={this.props.articles} />
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    performSearch: PropTypes.func,
    articles: PropTypes.array
}
export default Search