import styled from 'styled-components';

const ContenedorServicios = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const CajaRosa = styled.div`
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ede8e2;
`;

const DivImagen = styled.div`
  flex: 1;
`;

const Servicios = () => {
  return (
    <ContenedorServicios>
      <Container>
        <CajaRosa>
          <h1 className="titulo-servicio">Servicios</h1>
          <p className="text-center fs-1">
            Medicina preventiva, consulta, cirugía, imagenología, laboratorio,
            estética y más.
          </p>
        </CajaRosa>
        <DivImagen>
          <img
            src="/images/veterinaria.jpeg"
            alt="medicina"
            className="img-medicina"
          />
        </DivImagen>
      </Container>
    </ContenedorServicios>
  );
};

export default Servicios;
