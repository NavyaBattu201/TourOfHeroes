import Navbar from './Navbar';
import DashboardSection from './DashboardSection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeroesSection from './HeroesSection';
import HeroDetails from './HeroDetails';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <DashboardSection />
            </Route>
            <Route exact path='/hero-section'>
             <HeroesSection />
            </Route>
            <Route exact path='/hero/:id'>
             <HeroDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
