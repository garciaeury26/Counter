import React from 'react'
import PropTypes from 'prop-types'
export const Reset = ({ setNumber }) => {

    const reset = () => {
        setNumber(0)
    }

    return (
        <>
            <button onClick={reset}>Reset</button>
        </>
    )
}

//!para metros obligatorio => entes caso una funcion
Reset.prototype = {
    setNumber: PropTypes.func.isRequired,
}
