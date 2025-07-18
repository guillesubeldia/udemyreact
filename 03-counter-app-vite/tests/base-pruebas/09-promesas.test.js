import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas con promises', () => {

    test('getHeroesByIdAsync debe de retornar un heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then( (hero) => { 

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }); // Cambiar a true si el test pasa
                done(); // Indica que la prueba ha terminado1
            });
    });

    test('getHeroesByIdAsync debe dar error si heroe no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            
            .catch( error => { 
                expect(error).toBe(`No se pudo encontrar el héroe con el id: ${id}`); // Cambiar a true si el test pasa
          
                done(); // Indica que la prueba ha terminado1
            });
    });

})