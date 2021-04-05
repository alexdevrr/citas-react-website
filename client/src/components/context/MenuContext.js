import { createContext, useState } from 'react';

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        setSidebar,
        sidebar,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
