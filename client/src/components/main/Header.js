import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

const Header = () => {
  const [activetransparent, setActiveTransparent] = useState(false);

  useEffect(() => {
    const menuTransparent = () => {
      if (window.scrollY >= 100) {
        setActiveTransparent(true);
      } else {
        setActiveTransparent(false);
      }
    };

    window.addEventListener('scroll', menuTransparent);

    return () => {
      // Para evitar fuga de ram (desmontamos el componente)
      window.addEventListener('scroll', setActiveTransparent(true));
    };
  }, []);

  return (
    <div className={activetransparent ? 'header' : 'header active'}>
      <Container>
        <div className='animate__animated animate__jello'>
          <Title>HappyPet 🐶</Title>
        </div>
        <ContenedorMenu>
          <Listado>
            <Link to='/' className='enlace'>
              Inicio
            </Link> 
          </Listado>
          <Listado>
            <Link to='/usuarios' className='enlace'>
             Usuarios
            </Link>
          </Listado>
          <Listado>
            <Link to='/mascotas' className='enlace'>
              Mascotas
            </Link>
          </Listado>
          <Listado>
            <Link to='/membresias' className='enlace'>
              Membresias
            </Link>
          </Listado>
          <Listado>
            <Link to='/' className='enlace'>
              Sobre nosotros
            </Link>
          </Listado>
        </ContenedorMenu>
      </Container>
    </div>
  );
};

export default Header;
