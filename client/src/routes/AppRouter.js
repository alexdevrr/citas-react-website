import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Main from '../components/main/Main';
import MainMascotas from '../components/mascotas/MainMascotas';
import MainUsers from '../components/users/MainUsers';
import MainMembresias from '../components/mascotas/MainMembresias';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/mascotas' component={MainMascotas} />
        <Route exact path='/usuarios' component={MainUsers} />
        <Route exact path='/membresias' component={MainMembresias} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default AppRouter;
