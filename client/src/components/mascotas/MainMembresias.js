import styled from 'styled-components';
import Header from '../main/Header';
import CrearMembresia from './CrearMembresia';
import MenuList from '../menu/MenuList';

const ContedorDisplay = styled.div`
  display: flex;
  padding-top: 6rem;
`;

const MainMembresias = () => {
  return (
    <>
      <Header />
      <MenuList />
      <ContedorDisplay>
        <CrearMembresia />
      </ContedorDisplay>
    </>
  );
};

export default MainMembresias;
