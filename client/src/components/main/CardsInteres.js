import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import { Icons } from './Icons';

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  /* background-color: #313131; */
  justify-content: space-between;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Cards = styled.div`
  background-color: #ede8e2;
  flex: 0 1 calc(33% - 3rem);
`;

const EtiquetaVerde = styled.div`
  background-color: #43bb35;
  color: white;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: bold;
  padding: 0.5rem 0rem 0.5rem 0rem;
`;

const EtiquetaRosa = styled(EtiquetaVerde)`
  background-color: #f21f54;
`;

const EtiquetaAzul = styled(EtiquetaVerde)`
  background-color: #01abe8;
`;

const Info = styled.p`
  padding: 1rem;
  text-align: center;
  font-family: 'Montserrat';
`;

const VerMas = styled.a`
  color: #43bb35;
`;

const VerMas2 = styled(VerMas)`
  color: #f21f54;
`;

const CardsInteres = () => {
  return (
    <IconContext.Provider value={{ size: '50px' }}>
      <Contenedor>
        <Cards>
          <EtiquetaVerde>Nosotros</EtiquetaVerde>
          <Info>
            Conoce quienes somos, médicos veterinarios, nuestra historia, misión
            y visión. <VerMas href="#">Ver más</VerMas>
          </Info>
        </Cards>
        <Cards>
          <EtiquetaRosa>Contáctanos</EtiquetaRosa>
          <Info>
            <b>Urgencias (24 hrs.)</b>
            <br></br>
            🚑 5240-0404 / 55-8841-5819 Datos de contacto Clínica Veterinaria.
            <VerMas2>Ver más</VerMas2>
          </Info>
        </Cards>
        <Cards>
          <EtiquetaAzul>Redes Sociales</EtiquetaAzul>
          <Info>
            {Icons.map((icon, index) => (
              <a href="/" key={index} className={icon.cName}>
                {icon.icon}
              </a>
            ))}
          </Info>
        </Cards>
      </Contenedor>
    </IconContext.Provider>
  );
};

export default CardsInteres;
