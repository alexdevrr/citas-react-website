import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import { Icons } from './Icons';

const FooterContainer = styled.footer`
  background-color: #f25287;
`;

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

// const SocialMedia = styled.div`
//     display: fl
// `;

const Footer = () => {
  return (
    <IconContext.Provider value={{ size: '20px', color: '#ede8e2' }}>
      <FooterContainer>
        <Contenedor>
          <a href="#!" className="a-footer">
            Contacto
          </a>
          <a href="#!" className="a-footer">
            Mapa del sitio
          </a>
          <a href="#!" className="a-footer">
            Aviso de privacidad
          </a>
          <a href="#!" className="a-footer">
            Síguenos en:
          </a>
          <div>
            {Icons.map((icon, index) => (
              <a href="/" key={index} className={icon.cName}>
                {icon.icon}
              </a>
            ))}
          </div>
        </Contenedor>
      </FooterContainer>
    </IconContext.Provider>
  );
};

export default Footer;
