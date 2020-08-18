import React, {useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    -webkit-appearance: none;
`;

const useMoneda = (currency) => {
    
    const [ moneda, setMoneda ] = useState('');

    const SelectMoneda = () => (
        <>
            <Label>Moneda</Label>
            <Select 
                onChange={e => setMoneda(e.target.value)} 
                value={moneda}
            >
                <option value="">Selecione</option>
                {currency.map(arg => (
                    <option 
                        key={arg.codigo} 
                        value={arg.codigo}
                            
                    >{arg.nombre}</option>
                ))};
            </Select>
        </>
    );

    return [moneda, SelectMoneda, setMoneda];
};

export default useMoneda;