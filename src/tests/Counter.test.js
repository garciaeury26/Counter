
import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme'

import CounterApp from '../CounterApp';


describe('Prebas en el componente Counter app', () => {

    let wrapper = shallow(<CounterApp value={100} />)

    //reiniciar el valor cada prueba
    beforeEach(() => {
        wrapper = shallow(<CounterApp value={100} />)
    })

    test('Deve de mostrar <CounterApp/> correctamente (hacer macht con un snapshot)', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Deve de mostrar el valor por defecto de 100', () => {
        const value = wrapper.find('h2').text();
        expect(value).toBe('100');
    });

    test('Deve de incrementar el valor +1', () => {

        //el primer boton seria el que esta en el indice cero
        wrapper.find('button').at(0).simulate('click');
        const value = wrapper.find('h2').text();

        expect(value).toBe('101');
    });

    test('Deve de decrementar el valor -1', () => {
        wrapper.find('button').at(1).simulate('click');
        const value = wrapper.find('h2').text();

        expect(value).toBe('99')
    })

    test('El valor tiene que volver a suvalor por defecto', () => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        const value = wrapper.find('h2').text();

        expect(value).toBe('100')
    })
});


//! ojo las pruebas se realizan de forma sicrona entonces si yo tengo declarada un variable declarada de forma global con el componente
//! si simulo un +1 a una prop el valor de la variable cambiara
//* beforeEach arregla es
