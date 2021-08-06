import React, { useState } from 'react'
import { useCounter } from './hooks/useCounter'
import { Reset } from './Reset'

const h1 = <h1>React is amazing!</h1>

const CounterApp = ({ value }) => {

    const { number, sumar, restar, reset } = useCounter(value);

    return (
        <div className="container">
            <header className="header">
                {h1}
            </header>
            <h2>{number}</h2>
            <div className='conter-div'>
                <button onClick={sumar} type="button">Sumar</button>
                <button onClick={restar} type="button">Restar</button>
                <button onClick={reset} type="button">Reset</button>
                {/* <Reset setNumber={setNumber} /> */}
            </div>
        </div>
    )
}

CounterApp.defaultProps = {
    subtitulo: 'vaca: klk mio tine problema en los riñones'
};

export default CounterApp
