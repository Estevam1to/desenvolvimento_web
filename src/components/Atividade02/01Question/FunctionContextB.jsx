import React, { useContext } from 'react';
import { ColorContext } from './FunctionContextA';

const FunctionContextB = () => {
    const cores = useContext(ColorContext);

    return (
        <div>
            <h1 style={{ backgroundColor: cores.bkgB }}>Componente B</h1>
        </div>
    )
}

export default FunctionContextB;
