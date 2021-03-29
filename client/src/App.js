import FirstContent from './components/FirstContent';
import Header from './components/Header';
import Hero from './components/Hero';
import SecondContent from './components/SecondContent';
import Interes from './components/Interes';
import Footer from './components/Footer';
import Servicios from './components/Servicios';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      <FirstContent />
      <Servicios />
      <SecondContent />
      <Interes />
      <Footer />
    </div>
  );
}

export default App;
