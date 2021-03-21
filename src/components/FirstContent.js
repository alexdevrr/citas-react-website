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
  display: flex;
  align-items: center;
  background-color: #313131;
  color: white;
  flex: 0 1 calc(100% - 1rem);
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 20%), 0 0 0 1px #f9f3f3;
  margin-bottom: 1rem;
  position: relative;
  transition: 0.45s ease-in-out;

  @media screen and (min-width: 768px) {
    flex: 0 1 calc(33% - 1rem);
    height: 441px;
    margin-bottom: unset;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const CardMultiple = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  height: 100%;
`;

const Imagen = styled.div`
  flex: 1 0 calc(40%);
`;

const ContenedorBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
`;

const BotonHero = styled.button`
  font-family: 'Patrick Hand', cursive;
  background-color: transparent;
  min-width: 200px;
  color: white;
  padding: 0.5rem 0rem 0.5rem 0rem;
  border-radius: 5px;
  transition: 700ms;
  border: 1px solid #fff;
  cursor: pointer;
  font-size: 19px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #d15026;
    border: 1px solid #fff;
    color: white;
  }
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
            <ContenedorBtn>
              <BotonHero>Perros</BotonHero>
            </ContenedorBtn>
            <img className="img" alt="img-pet2" src="/images/pet2.jpeg" />
          </Card>

          <Card>
            <img className="img" alt="img-pet3" src="/images/pet3.jpeg" />
          </Card>

          <Card>
            <CardMultiple>
              <Imagen>
                <img
                  className="img border-r-1"
                  alt="img-pet4"
                  src="/images/pet4.jpeg"
                />
              </Imagen>
              <Imagen>
                <img
                  className="img border-r-2"
                  alt="img-pet5"
                  src="/images/pet5.jpeg"
                />
              </Imagen>
              <Imagen>
                <img
                  className="img border-r-3"
                  alt="img-pet6"
                  src="/images/pet6.jpeg"
                />
              </Imagen>
              <Imagen>
                <img
                  className="img border-r-4"
                  alt="img-pet7"
                  src="/images/pet7.jpeg"
                />
              </Imagen>
            </CardMultiple>
          </Card>
        </ContenedorCards>
      </Contenedor>
    </ContenedorFirstContent>
  );
};

export default FirstContent;
