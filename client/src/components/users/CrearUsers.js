import styled from 'styled-components';
import Formulario from './Formulario';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Row = styled.div`
  color: #f25287;
  text-align: center;
  flex: 1;
  margin-top: 1rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    flex: 0 1 calc(50%);
    margin-top: unset;
  }
`;

const CrearAndAdministrar = () => {
  // const [citas, guardarCitas] = useState([]);

  const crearUsuario = (user) => {
    // guardarCitas([...citas, user]);

    console.log({ user });

  };


  return (
    <Container>
      {/* <ContenedorDiv> */}
        <Row>
          <h1>Login</h1>
          <Formulario crearUsuario={crearUsuario} />
        </Row>
      {/* </ContenedorDiv> */}
    </Container>
  );
};

export default CrearAndAdministrar;
