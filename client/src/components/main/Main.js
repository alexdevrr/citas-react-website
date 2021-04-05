import MenuList from '../menu/MenuList';
import FirstContent from './FirstContent';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Interes from './Interes';
import SecondContent from './SecondContent';
import Servicios from './Servicios';

const Main = () => {
  return (
    <div>
      <Header />
      <MenuList />

      <Hero />

      <FirstContent />
      <Servicios />
      <SecondContent />
      <Interes />
      <Footer />
    </div>
  );
};

export default Main;
