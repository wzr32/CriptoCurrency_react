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

const useCripto = (apiResponse) => {
    
    const [cripto, setCripto] = useState('');
    const SelectCripto = () => (
        <>
            <Label>Criptomoneda</Label>
            <Select 
                onChange={ e => setCripto(e.target.value) } 
                value={cripto}
            >
                <option value=''>Select cripto</option>
                {apiResponse.map(cripto => (
                    <option
                        key={cripto.CoinInfo.Id}
                        value={cripto.CoinInfo.Name}
                    >{cripto.CoinInfo.FullName}</option>
                ))};
            </Select>
        </>
    );

    return [ cripto, SelectCripto, setCripto ];
};

export default useCripto;