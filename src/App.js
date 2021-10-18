import './App.css';

import Home from './Components/Home';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
     <nav>
        {/* <ul>
          <li>
            <NavLink to="/" activeClassName="App-link" exact>Home</NavLink>
          </li>
        </ul> */}
      </nav>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
