import '@testing-library/jest-dom';

import heroes from '../../data/heros';
import { getHeroeByIdAsync } from '../../bases/09-promesas';

//! el done dira cuando es que deve de terminar la prueba
//! siempre usa el done para tareas asincronas

describe('Pruebas con promesas', () => {

    test('Deve de rotonar un Herore async', (done) => {

        const id = 1;

        getHeroeByIdAsync(id).then((heroe) => {
            expect(heroe).toEqual(heroes[0])

            done();
        })
    })

    test('deve de obtener un eror si el heroe por id no existe', (done) => {

        const id = 20;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe')
                done();

            })
    })


})
