import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr.js', () => {
    test('retornaArreglo debe retornar un string y un número', () => {

        const [letters , numbers] = retornaArreglo();
        //aca se espera que los valores sean los que paso 
        //expect ( letters).toBe('ABC');
        //expect ( numbers).toBe(123);

        //aca se espera que letters sea un string y numbers sea un number
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        expect(letters).toEqual(expect.any(String));
    });
})