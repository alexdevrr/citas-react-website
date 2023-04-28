import styled from 'styled-components';
import Header from '../main/Header';
import CrearUsers from './CrearUsers';
import MenuList from '../menu/MenuList';

const ContedorDisplay = styled.div`
  display: flex;
  padding-top: 6rem;
`;

const MainMascotas = () => {
  return (
    <>
      <Header />
      <MenuList />
      <ContedorDisplay>
        <CrearUsers />
      </ContedorDisplay>
    </>
  );
};

export default MainMascotas;
