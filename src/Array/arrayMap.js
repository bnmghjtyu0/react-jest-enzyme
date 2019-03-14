import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArrayMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentWillMount() {
        const datas = [
            {
                listname: "001",
                listData: [
                    {
                        id: 3,
                        name: 'aa'
                    }, {
                        id: 2,
                        name: 'bb'
                    },
                    {
                        id: 1,
                        name: 'bb'
                    }
                ]
            }
        ]
        this.setState({
            list: datas
        })
    }

    render() {
        this.state.list.map(val => {
            return val.listData.sort((a, b) => a.id - b.id)
        })
        return (
            <div>
                {JSON.stringify(this.state.list)}
            </div>
        )
    }
}

export default ArrayMap