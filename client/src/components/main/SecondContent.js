import styled from 'styled-components';

const ContenedorSecondContent = styled.div`
  background-color: #ede8e2;
  width: 100%;
  margin: 0 auto;
  display: flex;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  position: relative;

  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 20%), 0 0 0 1px #ede8e2;
`;

const Contenedor = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ContenedorTexto = styled.div`
  max-width: 500px;
  text-align: justify;
  display: flex;
`;

const ContenedorEtiqueta = styled.div`
  display: flex;
  position: absolute;
  margin-top: -3rem;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Etiqueta = styled.div`
  max-width: 300px;
  background-color: #f25287;
  color: white;
  font-family: 'Montserrat', cursive;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 20%), 0 0 0 1px #f25287;
  margin-top: -0.5rem;
`;

const Span = styled.span`
  font-size: 16px;
`;

const B = styled.b`
  color: #f25287;
`;

const ContenedorBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const BtnRosa = styled.button`
  font-family: 'Patrick Hand', cursive;
  background-color: #f25287;
  min-width: 100px;
  color: white;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid #fff;
  font-size: 19px;
  cursor: pointer;

  transition: 700ms;

  animation: fadeIn ease 2s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #ca4873;
    border: 1px solid #fff;
    color: white;
  }
`;

const SecondContent = () => {
  return (
    <ContenedorSecondContent>
      <Contenedor>
        <ContenedorEtiqueta>
          <Etiqueta>¿Sabías qué?</Etiqueta>
        </ContenedorEtiqueta>

        <H1>
          Gato Esfinge <Span> 23/09/12</Span>
        </H1>
        <ContenedorTexto>
          <p>
            <B>
              El gato Esfinge, en inglés llamado Sphynx, es una raza considerada
              exótica por muchos?
            </B>{' '}
            Su principal característica es que no tienen pelo, como puedes ver
            en la foto. El origen de estos gatos no está claro, pero aparecen
            por primera vez en grabados precolombinos de los Aztecas...
          </p>
        </ContenedorTexto>

        <div className="rounded-circle">
          <img
            src="/images/sabiasque.jpg"
            className="about__card-body_img"
            alt="sabiasque"
          />
        </div>
        <ContenedorBtns>
          <BtnRosa>Ver más</BtnRosa>
          <BtnRosa>"Sabías qué" anteriores</BtnRosa>
        </ContenedorBtns>
      </Contenedor>
    </ContenedorSecondContent>
  );
};

export default SecondContent;
