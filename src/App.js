import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import img from './assets/cryptomonedas.png';
import Resumen from './components/Resumen';
import Spinner from './components/Spinner';
import Formulario from './components/Formulario';
import Axios from 'axios'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width: 900px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: "";
    width: 100px;
    height: 100px;
    background-color: #66a2fe;
    display: block;
  }
`;


const App = () => {

  const [cotizacion, setCotizacion] = useState({
    moneda:'',
    cripto: ''
  })

  const [resultado, setResultado] = useState({})
  const [load, setLoad] = useState(false)

  const { moneda, cripto } = cotizacion;

  useEffect( () => {

    const cotizar = async () => {
      if(cotizacion.moneda === '') return;
     
      const response = await Axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`);
      
      setLoad(true);

      setTimeout(() => {
        setLoad(false);
        setResultado(response.data.DISPLAY[cripto][moneda])
      }, 3000);

    };

    cotizar()
  }, [cotizacion, cripto, moneda]);
  

  const loading = load ? <Spinner /> : <Resumen resultado={resultado} />

  return (
    <Contenedor>
      <div>
        <Imagen src={img} alt="crypto"/>
      </div>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>

        <Formulario 
          setCotizacion={setCotizacion}
        />

        {loading}
        
      </div>
    </Contenedor>
  );
};

export default App;

// {*//*}