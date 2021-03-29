import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1200px;
  padding: 0rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0rem 2rem 0rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-family: 'Patrick Hand', cursive;
`;

const ContenedorMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  justify-content: center;

  @media screen and (min-width: 468px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Listado = styled.li`
  padding: 1rem;
  list-style: none;
`;

const Enlace = styled.a`
  /* color: #f25287; */
  font-family: 'Montserrat', sans-serif;
  transition: 400ms;

  &:hover {
    color: #313131;
  }
`;

const Header = () => {
  const [activetransparent, setActiveTransparent] = useState(false);

  const menuTransparent = () => {
    if (window.scrollY >= 80) {
      setActiveTransparent(true);
    } else {
      setActiveTransparent(false);
    }
  };

  window.addEventListener('scroll', menuTransparent);

  return (
    <>
      <div className={activetransparent ? 'header' : 'header active'}>
        <Container>
          <div className="animate__animated animate__jello">
            <Title>HappyPet 🐶</Title>
          </div>
          <ContenedorMenu>
            <Listado>
              <Enlace href="#">Inicio</Enlace>
            </Listado>
            <Listado>
              <Enlace href="#">Mascotas</Enlace>
            </Listado>
            <Listado>
              <Enlace href="#">Sobre nosotros</Enlace>
            </Listado>
          </ContenedorMenu>
        </Container>
      </div>
    </>
  );
};

export default Header;
