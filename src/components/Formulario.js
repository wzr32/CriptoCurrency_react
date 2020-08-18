import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCripto from '../hooks/useCripto';
import Error from './Error';
import Axios from 'axios';

const Button = styled.button`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326ac0;
        cursor:pointer
    }
`;


const Formulario = ({setCotizacion}) => {

    const [apiResponse, setApiResponse] = useState([])

    const [error, setError] = useState(false)

    const Monedas = [
        {codigo: 'USD', nombre: 'Dolar Americano'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'},
    ]

    const [ moneda, SelectMoneda ] = useMoneda(Monedas);
    const [ cripto, SelectCripto ] = useCripto(apiResponse);

    useEffect(() => {
        const api = async () => {
            const resultado = await Axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')  

            setApiResponse(resultado.data.Data)
        };
        api();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        if(moneda.trim() === '' || cripto.trim() === ''){
            setError(true)
            return;
        };

        setError(false);

        setCotizacion({
            moneda,
            cripto
        })

    };

    return (
        <form
            onSubmit={handleSubmit}
        >   

            {error ? <Error mensaje={'Todos los campos son obligatorios'} /> : null }

            <SelectMoneda />

            <SelectCripto />

            <Button
                type="submit"
            >Calcular</Button>
        </form>
    );
};

export default Formulario;