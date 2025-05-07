const newMessage = {
    message: 'Hola Mundo',
    title: 'Mi primera app'
}

export const FirstApp = () => {
    return (
        <>  
            <h1>Hola Mundo!</h1>
            <code>{JSON.stringify (newMessage)}</code>
            <p>Mi primera app</p>
        </>
    )
};