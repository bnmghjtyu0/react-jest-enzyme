import React from "react";
import unsplash from "../services/unsplash"
import axios from 'axios'
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            iamges: []
        }
    }
    componentDidMount() {
        this.fetchImages('Mountanins')
    }
    fetchImages = async term => {
        this.setState({
            status: "searching",
            term: term,
            images: []
        })
        try {
            const images = await unsplash(term);
            this.setState({
                status: "done",
                images
            })
        } catch (error) {
            this.setState({
                status: 'error'
            })
        }
    }

    render() {
        const { term, status, images } = this.state
        return (
            <div className="container">
                <div className="row">
                    {/* <button data-test="btn-click" className="btn" onClick={this.getData}>
                    GET DATA
                  </button>*/}

                    {images === undefined ? null : images.length === 0 ? null
                        : images.map(image => {
                            return (
                                <div className="col-6">
                                    <img key={image.id} src={image.urls.full} className="img-fluid" />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default Search;