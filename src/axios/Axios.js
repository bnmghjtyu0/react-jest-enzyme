import React from 'react'
import axios from 'axios'

export const getSecretWord = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3030')
            .then(res => {
                dispatch({
                    type: actionType.SET_SECRET_WORD,
                    payload: response.data
                })
            })
    }
}