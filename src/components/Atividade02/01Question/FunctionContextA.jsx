import React, { createContext } from 'react';
import FunctionContextB from './FunctionContextB';
import FunctionContextC from './FunctionContextC';      

const ColorContext = createContext();

const FunctionContextA = () => {
    const cores = { bkgA: "green", bkgB: "white", bkgC: "yellow", bkgD: "blue" };

    return (
        <ColorContext.Provider value={cores}>
            <FunctionContextB />
            <FunctionContextC />
        </ColorContext.Provider>
    )
}

export default FunctionContextA;