import checkPropTypes from 'check-prop-types'

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute of for search.
 * @returns {ShallowWraper}
 */

// export const storeFactory = (initialState) => {
//     const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
//     return createStoreWithMiddleware(rootReducer, initialState);
// }


export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name);
    expect(propError).toBeUndefined()
}