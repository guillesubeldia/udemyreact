import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';



describe('Pruebas en el archivo 08-imp-exp.js', () => {
    test('getHeroeById debe retornar un héroe por ID', () => {
        const id =100;
        const heroe = getHeroeById(id);
        console.log(heroe);
    })

    test('getHeroesbyOwner debe retornar héroes de un propietario específico', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));

        //verificar que sea de dc
        heroes.forEach(heroe => {
            expect(heroe.owner).toBe(owner);
        });
        
        
    })

    test('getHeroesByOwner de marvel',() => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);

    })

})