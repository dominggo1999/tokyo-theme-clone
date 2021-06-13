import { Switch, Route } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import News from './pages/News';

const App = () => {
  return (
    <div className="flex overflow-x-hidden">
      <SideNavbar />
      <div
        className="w-full h-full flex overflow-hidden"
        id="main"
      >
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
          <Route
            path="/news"
            exact
            component={News}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
