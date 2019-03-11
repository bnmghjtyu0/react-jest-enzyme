import React from 'react';
import PropTypes from 'prop-types'

const SearchResults = ({ articles = [] }) => (
    <>
    {console.log(articles)}
    <ul>
        {articles.map(({ url, who }) => (
            <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {who}
                </a>
            </li>
        ))}
    </ul>
    </>
)

// SearchResults.PropTypes = {
//     articles: PropTypes.array
// }

export default SearchResults