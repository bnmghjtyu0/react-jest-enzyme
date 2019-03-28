import React from "react";
import unsplash from "../services/unsplash"
import axios from 'axios'
import WithLayout from './WithLayout'
class Search extends React.Component {
    state = {
        term: "",
        images: [],
        status: "initial",
        test: []
    };
    componentDidMount() {
        this.fetchImages("Mountains");
    }

    fetchImages = async term => {
        this.setState({
            status: "searching",
            term: term,
            images: [],
            test: [{ id: 1 }]
        });

        try {
            const images = await unsplash(term);
            this.setState({
                status: "done",
                images: images.data.results
            });
        } catch (error) {
            this.setState({
                status: "error"
            });
        }
    };


    render() {
        const { term, status, images } = this.state
        return (
            <div className="App">
                {images.map(image => <img src={image.urls.full} key={image.id} className="img-fluid" />)}
            </div>
        )
    }
}

export default WithLayout(Search);