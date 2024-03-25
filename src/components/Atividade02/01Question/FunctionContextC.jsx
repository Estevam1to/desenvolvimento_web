import React, { useContext } from 'react';
import { ColorContext } from './FunctionContextA';

const FunctionContextC = () => {
    const cores = useContext(ColorContext);

    return (
        <div>
            <h1 style={{ backgroundColor: cores.bkgC }}>Componente C</h1>
        </div>
    )
}

export default FunctionContextC;
