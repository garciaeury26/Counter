import React from 'react'
import PropTypes from 'prop-types'

export const PrimeraApp = ({ saludo, subtitulo }) => {
    return (
        <div>
            <h1 style={{ color: '#fff' }}>{saludo}</h1>
            <span>{subtitulo}</span>
        </div >
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy el jefe'
}
