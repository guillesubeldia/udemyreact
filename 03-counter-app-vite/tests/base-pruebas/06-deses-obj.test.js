import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en el archivo 06-deses-obj.test.js', () => {

    test('getUsuarioActivo debe retornar un objeto con el nombre y uid', () => {

        const clave = 'Guille123';
        const nombre = 'Guille';
        const edad = 30;
        const rango = 'Capitán';

        const testUser = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        const user = usContext({ clave, nombre, edad, rango });

        expect(testUser).toStrictEqual(user);
    });

});
