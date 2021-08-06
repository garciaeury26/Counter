import '@testing-library/jest-dom'

//* toEqual => para comparar objetos

import { getUser, getUsuarioActivo } from '../../bases/05-funciones'

describe('Pruebas en 05-funciones', () => {

    test('deve de rotornar un objeto', () => {

        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        expect(getUser()).toEqual(user)
    })

    //Tarea
    test('getUsuarioActiov deve de regresar un objeto', () => {

        const name = 'eury'

        const user = {
            uid: 'ABC567',
            username: name
        }

        const usurioActive = getUsuarioActivo(name);

        expect(usurioActive).toEqual(user)

        //* otra forma
        // expect(usurioActive).toEqual({
        //     uid: 'ABC567',
        //     username: name
        // })
    })



})
