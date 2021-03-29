import styled from 'styled-components';
import CardsInteres from './CardsInteres';

const Contenedor = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 3rem 2rem 3rem;
  margin-bottom: 3rem;
`;

const TdInteres = styled.div`
  border-bottom-width: 5px;
  border-bottom-style: solid;
  border-bottom-color: #dddddd;
`;

const InteresTexto = styled.div`
  color: #f25287;
  margin-bottom: 10px;
  font-size: 2rem;
`;

const Interes = () => {
  return (
    <Contenedor>
      <TdInteres>
        <InteresTexto>De tu interés</InteresTexto>
      </TdInteres>
      <CardsInteres />
    </Contenedor>
  );
};

export default Interes;
