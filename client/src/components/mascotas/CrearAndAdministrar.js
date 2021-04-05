import { useState } from 'react';
import styled from 'styled-components';
import CardCita from './CardCita';
import Formulario from './Formulario';
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

const CrearAndAdministrar = () => {
  const [citas, guardarCitas] = useState([]);

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  return (
    <Container>
      <Title title={'Agenda tu cita'} />
      <ContenedorDiv>
        <Row>
          <h1>Crear cita</h1>
          <Formulario crearCita={crearCita} />
        </Row>
        <Row style={{ marginLeft: '4%' }}>
          <h1>Administra tus citas</h1>
          {citas.map((cita, id) => (
            <CardCita key={id} cita={cita} eliminarCita={eliminarCita} />
          ))}
        </Row>
      </ContenedorDiv>
    </Container>
  );
};

export default CrearAndAdministrar;
