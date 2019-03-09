import React from 'react'
import PropTypes from 'prop-types'

class SoundPlayer {
    constructor() {
        this.foo = 'bar';
    }
    playSoundFile(fileName) {
        console.log('Playing sound file ' + fileName);
    }
    render() {
        return <h1>23</h1>
    }
}

export default SoundPlayer