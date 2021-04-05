import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from '../context/MenuContext';

import * as ImIcons from 'react-icons/im';
import * as VscIcons from 'react-icons/vsc';

import MenuDatos from './MenuDatos';

const Menu = () => {
  const menuContext = useContext(MenuContext);
  const { setSidebar, sidebar } = menuContext;

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const closeSidebar = () => setSidebar(false);

  const [activetransparent, setActiveTransparent] = useState(false);

  useEffect(() => {
    const menuTransparent = () => {
      if (window.scrollY >= 100) {
        setActiveTransparent(true);
      } else {
        setActiveTransparent(false);
      }
    };

    window.addEventListener('scroll', menuTransparent);

    return () => {
      // Para evitar fuga de ram (desmontamos el componente)
      window.addEventListener('scroll', setActiveTransparent(true));
    };
  }, []);

  return (
    <div
      className={activetransparent ? 'navbar-header' : 'navbar-header active'}
    >
      <Link to="#" className="menu-bars">
        <ImIcons.ImMenu onClick={showSidebar} />
      </Link>

      <nav className={sidebar ? 'nav-menu show' : 'nav-menu'}>
        <ul className="text-center padding-0">
          <li>
            <Link to="#" className="rutas-navbar li">
              <VscIcons.VscChromeClose onClick={closeSidebar} />
            </Link>
          </li>
          {MenuDatos.map((item, index) => (
            <li key={index} className="li">
              <Link to={item.path} className="rutas-navbar">
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
