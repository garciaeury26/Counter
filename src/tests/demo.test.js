

describe('pruebas en demo.tests 😎', () => {

    //viene de jests => test
    test('deven de se iguales los strings', () => {

        //1-inicializacion
        const message = 'hello word'

        //2- estimulo
        const mensaje2 = 'hello word'

        //3- observar el comportamiento
        //tiene que ser igual los valores
        expect(message).toBe(mensaje2)

    })
})
