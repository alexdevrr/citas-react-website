import { useState } from 'react';
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
  border-bottom-color: #dddddd;
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
  height: 300px;

  @media screen and (min-width: 768px) {
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
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex: 0 1 calc(33% - 1rem);
    /* height: 441px; */
    margin-bottom: unset;
    height: 300px;
  }

  /* &:hover {
    transform: scale(1.02);
  } */
`;

const ContenedorBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  /* 
  @media screen and (min-width: 768px) {
  } */
`;

const BtnNaranja = styled.button`
  font-family: 'Patrick Hand', cursive;
  background-color: transparent;
  min-width: 200px;
  color: white;
  padding: 0.5rem 0rem 0.5rem 0rem;
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
    background-color: #d15026;
    border: 1px solid #fff;
    color: white;
  }
`;

const BtnAzul = styled(BtnNaranja)`
  background-color: transparent;

  &:hover {
    background-color: #017acd;
    border: 1px solid #fff;
    color: white;
  }
`;

const BtnVerde = styled(BtnNaranja)`
  background-color: transparent;

  &:hover {
    background-color: #294121;
    border: 1px solid #fff;
    color: white;
  }
`;

const FirstContent = () => {
  const [btnorange, setBtnOrange] = useState(false);
  const [btnblue, setBtnBlue] = useState(false);
  const [btngreen, setBtnGreen] = useState(false);

  const [activecards, setActiveCards] = useState(false);

  const animacionCards = () => {
    if (window.scrollY >= 210) {
      setActiveCards(true);
    }
  };

  window.addEventListener('scroll', animacionCards);

  return (
    <ContenedorFirstContent>
      <Contenedor>
        <TdTuMascota>
          <TuMascota>Tu mascota</TuMascota>
        </TdTuMascota>

        {activecards && (
          <div className="animate__animated animate__bounceInUp">
            <ContenedorCards>
              <Card
                onMouseEnter={() => setBtnOrange(true)}
                onMouseLeave={() => setBtnOrange(false)}
              >
                {/* Botón */}
                <ContenedorBtn>
                  {btnorange && <BtnNaranja>Perro</BtnNaranja>}
                </ContenedorBtn>
                <img className="img" alt="img-pet2" src="/images/pet2.jpeg" />
              </Card>

              <Card
                onMouseEnter={() => setBtnBlue(true)}
                onMouseLeave={() => setBtnBlue(false)}
              >
                {/* Botón carga condicional*/}
                <ContenedorBtn>
                  {btnblue && <BtnAzul>Gato</BtnAzul>}
                </ContenedorBtn>
                <img className="img" alt="img-pet3" src="/images/pet3.jpeg" />
              </Card>

              {/* Cards multiples */}

              <Card
                onMouseEnter={() => setBtnGreen(true)}
                onMouseLeave={() => setBtnGreen(false)}
              >
                <ContenedorBtn>
                  {btngreen && <BtnVerde>Otras Especies</BtnVerde>}
                </ContenedorBtn>

                <img className="img" alt="img-pet4" src="/images/pet5.jpeg" />
              </Card>
            </ContenedorCards>
          </div>
        )}
      </Contenedor>
    </ContenedorFirstContent>
  );
};

export default FirstContent;
