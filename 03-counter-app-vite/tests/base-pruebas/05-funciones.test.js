import { getUser,getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en el archivo 05-funciones.test.js', () => {

    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toStrictEqual( user );
    });

    test('GetUsuarioActivo debe retornar un objeto', () => { 
        const name = 'Guille';
        const testUser = {
            uid: 'ABC567',
            username: name
        };

        const user = getUsuarioActivo(name);

        expect( testUser ).toStrictEqual( user );

    });
});