import styled from 'styled-components';
import { TdTuMascota } from '../main/FirstContent';
import { BtnSubmit } from './Formulario';

const Cita = styled.div`
  padding: 2rem;
  margin-top: 1rem;
  background: #fff;
  border-bottom: 1px solid #e1e1e1;
  color: #000;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 20%), 0 0 0 1px #ede8e2;
`;

const P = styled.p`
  text-align: left;
  font-weight: bold;
  padding-top: 0.5rem;
`;

const Span = styled.span`
  font-weight: normal;
`;

const stylesBorder = {
  borderBottomWidth: '2px',
  borderBottomColor: '#f25287',
  paddingTop: '0.5rem',
};

const stylesBtn = {
  color: '#f25287',
  backgroundColor: 'white',
  border: '1px solid #f25287',

  hover: {
    backgroundColor: '#f7d9d9',
  },
};

const styleInfo = {
  fontSize: '19px',
  fontWeight: 'bold',
  marginTop: '1rem',
  color: '#a73b5f',
};

const CardCita = ({ cita, eliminarCita }) => {
  return (
    <>
      {cita.length !== 0 ? (
        <Cita>
          <P>
            Dueño: <Span>{cita.propietario}</Span>
          </P>
          <TdTuMascota style={stylesBorder} />
          <P>
            Fecha: <Span>{cita.fecha}</Span>
          </P>
          <TdTuMascota style={stylesBorder} />

          <P>
            Tipo de membresia:{' '}
            <Span>
              {cita.tipo_membresia.charAt(0).toUpperCase() +
                cita.tipo_membresia.slice(1)}
            </Span>
          </P>
          <TdTuMascota style={stylesBorder} />

          <BtnSubmit style={stylesBtn} onClick={() => eliminarCita(cita.id)}>
            Eliminar &times;
          </BtnSubmit>
        </Cita>
      ) : (
        <p style={styleInfo}>Comienza creando una cita</p>
      )}
    </>
  );
};

export default CardCita;
