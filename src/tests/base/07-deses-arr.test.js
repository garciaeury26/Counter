import '@testing-library/jest-dom'

import { retornaArreglo } from '../../bases/07-deses-arr'

describe('Pruebas en 07-Desestructuración', () => {

    test('Deve de retornar un string y un numero', () => {

        // const arr = retornaArreglo();
        // expect(arr).toEqual(['ABC', 123]);

        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);

        expect(typeof numeros).toBe('number');
        expect(typeof letras).toBe('string');

    })

})
