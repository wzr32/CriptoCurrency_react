import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #fff;
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;
    
    span {
        font-weight: bold;
    }
`;

const Resumen = ({resultado}) => {
    
    if (Object.keys(resultado).length === 0) return null;

    const { PRICE, OPENHOUR, HIGHHOUR, LOWHOUR, LASTUPDATE } = resultado;

    return (
        <ResultadoDiv>
            <Precio>Precio: <span>{PRICE}</span></Precio>
            <Info>Apertura: <span>{OPENHOUR}</span></Info>
            <Info>Precio mas alto del dia: <span>{HIGHHOUR}</span></Info>
            <Info>Precio mas bajo del dia: <span>{LOWHOUR}</span></Info>
            <Info>Ultima actualizacion: <span>{LASTUPDATE}</span></Info>
        </ResultadoDiv>
    );
};

export default Resumen;