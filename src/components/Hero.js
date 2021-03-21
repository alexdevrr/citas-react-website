import styled from 'styled-components';

const ContenedorHero = styled.div`
  background-image: url('/images/pet1.jpeg');
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const ContenedorInformacion = styled.div`
  display: flex;
  align-items: center;
`;

const ContenedorInfoAndBoton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextoInformacion = styled.h1`
  color: white;
  font-family: 'Montserrat', cursive;
`;

const BotonHero = styled.button`
  font-family: 'Patrick Hand', cursive;
  background-color: Transparent;
  min-width: 200px;
  color: white;
  padding: 0.5rem 0rem 0.5rem 0rem;
  border-radius: 5px;
  transition: 700ms;
  border: 1px solid #fff;
  cursor: pointer;
  font-size: 19px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #f9f3f3;
    border: 1px solid #f25287;
    color: #f25287;
  }
`;

const Hero = () => {
  return (
    <div>
      <ContenedorHero>
        <ContenedorInformacion>
          <ContenedorInfoAndBoton>
            <TextoInformacion>Al cuidado de tus pequeños</TextoInformacion>
            <BotonHero>Agendar cita</BotonHero>
          </ContenedorInfoAndBoton>
        </ContenedorInformacion>
      </ContenedorHero>
    </div>
  );
};

export default Hero;
