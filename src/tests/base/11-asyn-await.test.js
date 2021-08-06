import { getImagen } from "../../bases/11-async-await"

describe('Pruebas con asyn-await', () => {

    test('Debe de rotornar la url de la imagen', async () => {

        const url = await getImagen();
        // console.log(url)

        expect(url.includes('https://')).toBe(true)
        expect(typeof url).toBe('string');
    })

})
