import checkPropTypes from 'check-prop-types'
import withLayout from '../src/containers/WithLayout'

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute of for search.
 * @returns {ShallowWraper}
 */

const withLayoutStore = () => {
    return withLayout()
}


const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name);
    expect(propError).toBeUndefined()
}

export { withLayoutStore, findByTestAttr, checkProps }