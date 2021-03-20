import styled from 'styled-components';

const ComponenteHeader = styled.header`
  background-color: #f25287;
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  width: 1200px;
  padding: 0rem !important;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0rem 2rem 0rem 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #fff;
`;

const ContenedorMenu = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0px;
`;

const Listado = styled.li`
  padding: 1rem;
  list-style: none;
`;

const Enlace = styled.a`
  color: white;
`;

const Header = () => {
  return (
    <ComponenteHeader>
      <Container>
        <Title>HappyPet🐕</Title>
        <ContenedorMenu>
          <Listado>
            <Enlace href="#">Inicio</Enlace>
          </Listado>
          <Listado>
            <Enlace href="#">Inicio</Enlace>
          </Listado>
          <Listado>
            <Enlace href="#">Inicio</Enlace>
          </Listado>
        </ContenedorMenu>
      </Container>
    </ComponenteHeader>
  );
};

export default Header;
