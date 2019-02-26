import React from 'react'
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import GuessedWords from '../GuessedWords'

const defaultProps = {
    guessedWords: [{ guessedWords: 'train', letterMatchCount: 3 }]
}

/**
* Factory function to create a ShallowWrapper for the App component
* @function setup
* param {object} props - Component props specific to this setup
* @param {object} props - Initial state for setup.
* @returns {ShallowWraper}
*/

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps)
})