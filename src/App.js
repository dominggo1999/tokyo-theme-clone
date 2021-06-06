import { Switch, Route } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <div className="flex overflow-x-hidden">
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
        <Route
          path="/portfolio"
          exact
          component={Portfolio}
        />
      </Switch>
    </div>
  );
};

export default App;
