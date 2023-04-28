import { useState } from 'react';
import styled from 'styled-components';
import CardCita from './CardCita';
import FormularioMembresia from './FormularioMembresia';
import Title from './Title';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const ContenedorDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
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

const CrearMembresia = () => {
  const [membresias, guardarMembresia] = useState([]);

  const crearMembresia = (membresia) => {
    console.log(
      '🚀 ~ file: CrearMembresia.js:42 ~ crearMembresia ~ membresia:',
      membresia
    );
    guardarMembresia([...membresias, membresia]);
  };

  const eliminarMembresia = (id) => {
    const nuevasMembresias = membresias.filter((item) => item.id !== id);
    guardarMembresia(nuevasMembresias);
  };

  return (
    <Container>
      <Title title={'Crea tu membresía'} />
      <ContenedorDiv>
        <Row>
          <h1>Ingresa tus datos</h1>
          <FormularioMembresia crearCita={crearMembresia} />
        </Row>
        <Row style={{ marginLeft: '4%' }}>
          <h1>Administra tus membresías</h1>
          {membresias.map((cita, id) => (
            <CardCita key={id} cita={cita} eliminarCita={eliminarMembresia} />
          ))}
        </Row>
      </ContenedorDiv>
    </Container>
  );
};

export default CrearMembresia;
