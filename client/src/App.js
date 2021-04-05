import MenuProvider from './components/context/MenuContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <MenuProvider>
      <div className="App">
        <AppRouter />
      </div>
    </MenuProvider>
  );
}

export default App;
