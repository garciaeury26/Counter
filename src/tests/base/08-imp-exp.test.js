import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../bases/08-imp-exp'
import heroes from '../../data/heros'

describe('Pruebas en 08-imp-exp', () => {

    test('Deve de rotornar un heroe', () => {

        const id = 1;

        const heroe = getHeroeById(1);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    })

    test('si no existe el eroe que devuelva unfined', () => {


        const heroe = getHeroeById(20);

        expect(heroe).toBe(undefined);

    })

    test('Deve de rotornar un arreglo con los heroes de DC', () => {

        const owner = 'DC'

        const heroes = getHeroesByOwner(owner);

        const data = heroes.filter(hero => hero.owner === owner);

        expect(heroes).toEqual(data);
    })

    test('Deve de rotornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel'

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    })

})
