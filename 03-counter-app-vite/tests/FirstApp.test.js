// Importa la función render de React Testing Library para renderizar componentes en pruebas
import { render } from '@testing-library/react';
// Importa el componente FirstApp que será testeado
import { FirstApp } from '../src/FirstApp';

// Agrupa todos los tests relacionados con el componente <FirstApp />
describe('Pruebas en <FirstApp />', () => {
    
    // Test comentado: compara el HTML renderizado del componente con un snapshot guardado previamente
    // para detectar cambios inesperados en la estructura del componente
    // test('debe de hacer match con el snapshot', () => {
    //     const title = 'Hola, Soy Goku';
    //     const { container } = render( <FirstApp title={ title } /> );
    //     expect( container ).toMatchSnapshot();
    // });

    // Test que verifica que el título se muestre correctamente en un h1
    test('debe de mostrar el título en un h1', () => {
        const title = 'Hola, Soy Goku';
        // Renderiza el componente FirstApp con el título especificado
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        // Verifica que el título esté presente en el documento
        expect( getByText(title) ).toBeTruthy();

        // Alternativa comentada: buscar el h1 directamente en el DOM
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title )

        // Verifica que el elemento con data-testid="test-title" contenga el texto del título
        expect( getByTestId('test-title').innerHTML ).toContain(title);
    });

    // Test que verifica que el subtítulo enviado por props se muestre dos veces en el componente
    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un subtitulo';
        // Renderiza el componente FirstApp con título y subtítulo
        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            /> 
        );
        // Verifica que el subtítulo se muestre dos veces en el documento
        expect( getAllByText(subTitle).length ).toBe(2);
    });

});