import React, {Fragment, useState } from 'react';
import styled from '@emotion/styled';



const Label = styled.label`
    font-family: 'Ubuntu', sans-serif;
    color: white;
    font-size: 2.4rem;
    margin-top: 2rem;
    display:block;
`;

const Select = styled.select`
    width: 100%
    display: block;
    padding: .5rem;
    -webkit-appearance: none;
    border-radius: 10px;
    font-size: 1.2rem;
    border: none;
`



const useCriptomoneda= (label, stateInicial, opciones) => {

    console.log(opciones);
    //State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}            
            >
                <option value="">- Seleccione -</option>
                {/*opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))*/}
            </Select>
        </Fragment>
    );

    //Retornar state, interfaz y funcion que modifica el state
    return [state, SelectCripto, actualizarState];
}

export default useCriptomoneda;