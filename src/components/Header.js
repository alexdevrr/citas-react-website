import styled from 'styled-components';

const ComponenteHeader = styled.header`
  background-color: #f9f3f3;
  display: flex;
  width: 100%;

  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 20%), 0 0 0 1px #f9f3f3;
`;

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
  color: #f25287;
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
  color: #f25287;
  font-family: 'Montserrat', sans-serif;
  transition: 400ms;

  &:hover {
    color: #313131;
  }
`;

const Header = () => {
  return (
    <ComponenteHeader>
      <Container>
        <Title>HappyPet 🐶</Title>
        <ContenedorMenu>
          <Listado>
            <Enlace href="#">Mascotas</Enlace>
          </Listado>
          <Listado>
            <Enlace href="#">Sobre nosotros</Enlace>
          </Listado>
          <Listado>
            <Enlace href="#">Opiniones</Enlace>
          </Listado>
        </ContenedorMenu>
      </Container>
    </ComponenteHeader>
  );
};

export default Header;
