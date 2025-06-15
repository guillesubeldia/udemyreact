import { useState } from 'react';
import PropTypes from 'prop-types';



export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = (action) =>{
    // console.log(event);
    setCounter((c) => {
        if (action === 'sumar') return c + 1;
        if (action === 'restar') return c - 1;
        if (action === 'reset') return value;
        return c;
      });
    }
    

    return (
        <>  
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={()=> handleAdd( 'sumar') }>+1</button>
            <button onClick={()=>  handleAdd('restar') }>-1</button>
            <button onClick={()=>  handleAdd('reset') }>RESET</button>

        </>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number
}