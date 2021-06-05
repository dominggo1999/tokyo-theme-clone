import { Switch, Route } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <div className="flex">
      <SideNavbar />
      <Switch>
        <Route
          path="/"
          exact
          component={Home}
        />
        <Route
          path="/about"
          exact
          component={About}
        />
      </Switch>
    </div>
  );
};

export default App;
