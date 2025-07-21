// Importa las funciones render y screen de React Testing Library para renderizar componentes y consultar el DOM en pruebas
import { render, screen } from '@testing-library/react';
// Importa el componente FirstApp que será testeado
import { FirstApp } from '../src/FirstApp';


// Agrupa todos los tests relacionados con el componente <FirstApp />
describe('Pruebas en <FirstApp />', () => {

    // Define variables para el título y el subtítulo que se usarán en las pruebas
    const title    = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';
    
    // Test que compara el HTML renderizado del componente con un snapshot guardado previamente
    // para detectar cambios inesperados en la estructura del componente
    test('debe de hacer match con el snapshot', () => {
        
        // Renderiza el componente FirstApp con el título especificado
        const { container } = render( <FirstApp title={ title } /> );
        // Compara el HTML renderizado con el snapshot
        expect( container ).toMatchSnapshot();

    });

    // Test que verifica que el mensaje "Hola, Soy Goku" se muestre en el documento
    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        
        // Renderiza el componente FirstApp con el título especificado
        render( <FirstApp title={ title } /> );
        // Verifica que el texto del título esté presente en el documento
        expect( screen.getByText(title) ).toBeTruthy();
        // screen.debug(); // Línea comentada que permite imprimir el DOM renderizado para depuración
    });

    // Test que verifica que el título se muestre en un elemento h1
    test('debe de mostrar el titulo en un h1', () => {
        // Renderiza el componente FirstApp con el título especificado
        render( <FirstApp title={ title } /> );
        // Verifica que el elemento h1 contenga el texto del título
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    // Test que verifica que el subtítulo enviado por props se muestre dos veces en el componente
    test('debe de mostrar el subtitulo enviado por props', () => {
        
        // Renderiza el componente FirstApp con título y subtítulo
        render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />  
        );

        // Verifica que el subtítulo se muestre dos veces en el documento
        expect( screen.getAllByText(subTitle).length ).toBe(2);

    });


});