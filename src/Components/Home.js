import About from './About';
import Profiles from './Profiles';
import WhatHomeDoes from './WhatHomeDoes';
import { NavLink, Switch, Route } from 'react-router-dom';

const Home = () => {
  return (
  <div>
    <nav>
      <ul>
        <NavLink to="/" ClassName="App-link">Home</NavLink>
      </ul>
      <ul>
        <NavLink to="/about" ClassName="App-link">About</NavLink>
      </ul>
      <ul>
        <NavLink to="/profiles" ClassName="App-link">Profiles</NavLink>
      </ul>
    </nav>

    <Switch>
        <Route path="/about" component={About}/>
        <Route path="/profiles">
          <Profiles />
        </Route>
        <Route path="/">
          <WhatHomeDoes />
        </Route>
    </Switch>
  </div>
  );
};

//<Home />

export default Home;

