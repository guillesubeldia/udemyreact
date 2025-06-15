import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

    if (!title) {
        throw new Error('El title es obligatorio')
    }

    return (
        <>  
            <h1>{ title }</h1>
            <p>{subTitle}</p>
            <p>{ name }</p>

        </>
    )
}

FirstApp.defaultProps = {
    title : 'No hay título',
    subTitle : 0,
    name : 'Nombre Defecto'
}

FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subTitle : PropTypes.number.isRequired,
    name: PropTypes.string
}

