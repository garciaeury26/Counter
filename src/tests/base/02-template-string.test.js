import '@testing-library/jest-dom'

import { getSaludo } from '../../bases/02-template-string'

describe('Pruebas 02.template.string', () => {

    test('debe de retornar hola fernando', () => {

        const nombre = 'fernando'

        const saludo = getSaludo(nombre)

        expect(saludo).toBe(`hola ${nombre}`)
    })

    //tarea
    test('Deve de regresar hola carlos => si no hay nombre ', () => {

        const saludo = getSaludo()

        expect(saludo).toBe('hola carlos');
    })


})
