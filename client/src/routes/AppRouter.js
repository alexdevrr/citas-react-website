import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Main from '../components/main/Main';
import MainMascotas from '../components/mascotas/MainMascotas';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/mascotas" component={MainMascotas} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
