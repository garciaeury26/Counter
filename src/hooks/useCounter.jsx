import React, { useState } from 'react';

export const useCounter = (initialState) => {

    const [number, setNumber] = useState(initialState);

    const sumar = () => {
        setNumber(number + 1)
    }

    const restar = () => {
        if (number > 0) setNumber(number - 1)
    }

    const reset = () => {
        setNumber(initialState)
    }

    return ({
        number,
        sumar,
        restar,
        reset,
    })
}
