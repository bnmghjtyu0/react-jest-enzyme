import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycle extends Component {
    constructor(props) {
        super();
        this.count = 0;
        this.history = [];
    }

    componentWillMount() {
        this.count = this.count + 1;
        this.history.push('componentWillMount');
    }
    componentDidMount() {
        this.count = this.count + 1;
        this.history.push('componentDidMount');
    }
    render() {
        this.count = this.count + 1;
        this.history.push('render');
        return <div>foo</div>;
    }
}

export default LifeCycle