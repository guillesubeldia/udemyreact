import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en el archivo demo.test.js', () => {
  test('getSaludo debe retornar "Hola Guillermo"', () => {
    const name = 'Guillermo';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });
});