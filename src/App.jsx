import Form from './Form';
import Contact from './Contact';
import Welcome from './Welcome';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Form - Game</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/contact" component={Contact} />
        <Route path="/welcome" component={Welcome} />
      </Switch>
    </div>
  );
}

export default App;
