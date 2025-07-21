import { render } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {

    test('debe de mostrar el valor inicial de 100', () => {
        const { getByText } = render( <CounterApp value={100} /> );
        expect( getByText(100) ).toBeTruthy();
    });
});