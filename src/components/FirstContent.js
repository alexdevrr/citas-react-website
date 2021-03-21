import styled from 'styled-components';

const ContenedorFirstContent = styled.div``;

const Contenedor = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 3rem 2rem 3rem;
  margin-bottom: 10rem;
`;

const TdTuMascota = styled.div`
  border-bottom-width: 5px;
  border-bottom-style: solid;
  border-bottom-color: #ede9e2;
`;

const TuMascota = styled.div`
  color: #f25287;
  margin-bottom: 10px;
  font-size: 2rem;
`;

const ContenedorCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;

  @media screen and (min-width: 468px) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  background-color: #313131;
  color: white;
  flex: 0 1 calc(100% - 1rem);
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 20%), 0 0 0 1px #f9f3f3;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    flex: 0 1 calc(33% - 1rem);
    height: 441px;
    margin-bottom: unset;
  }
`;

const CardMultiple = styled(Card)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
`;

const Imagen = styled.div`
  flex: 1 0 calc(40%);
`;

const FirstContent = () => {
  return (
    <ContenedorFirstContent>
      <Contenedor>
        <TdTuMascota>
          <TuMascota>Tu mascota</TuMascota>
        </TdTuMascota>

        <ContenedorCards>
          <Card>
            <img className="img" src="/images/pet2.jpeg" />
          </Card>
          <Card>
            <img className="img" src="/images/pet3.jpeg" />
          </Card>

          <CardMultiple>
            <Imagen>
              <img className="img border-r-1" src="/images/pet4.jpeg" />
            </Imagen>
            <Imagen>
              <img className="img border-r-2" src="/images/pet5.jpeg" />
            </Imagen>
            <Imagen>
              <img className="img border-r-3" src="/images/pet6.jpeg" />
            </Imagen>
            <Imagen>
              <img className="img border-r-4" src="/images/pet7.jpeg" />
            </Imagen>
          </CardMultiple>
        </ContenedorCards>
      </Contenedor>
    </ContenedorFirstContent>
  );
};

export default FirstContent;
