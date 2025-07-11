test('Esta prueba no debe fallar', () => {
    // 1 inicializacion
    const message1 = 'Hola, mundo!';
    
    // 2 estimulo
    const message2 = message1.trim();

    // 3 observacion
    expect(message1).toBe(message2);
})