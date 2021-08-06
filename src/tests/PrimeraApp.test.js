import React from 'react';
import '@testing-library/jest-dom'

//*si con jest normal
// import '@testing-library/jest-dom'
// import { render } from '@testing-library/react';

//* si em para enzyme
import { shallow } from 'enzyme'

import { PrimeraApp } from '../PrimeraApp';

describe('Pruabas en el componente de pruebas', () => {

    // test('debe de mostrar el mensaje soy el jefe => del subtitulo', () => {
    //     const saludo = 'hi my name is eury';
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    const saludo = 'hi my name is eury';
    const subtitulo = 'nice to meet you'

    test('Deve de mostrar <PrimeraApp/> corractamente', () => {
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Deve de mostrar el subtitulo enviado por props', () => {
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        //buscate un span en el componente
        //* pudes llamar lo tambien con id
        //hay mas propiedades en este caso solo el texto de la etiqueta
        const textoParrafo = wrapper.find('span').text();

        expect(textoParrafo).toBe(subtitulo);

    })




})
