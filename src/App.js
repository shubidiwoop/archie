import React, { Component } from 'react';
import Home from './pages/home';
import SignUp from './pages/SignUp';
import Ngo from './pages/ngo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Donor from './pages/donor';



class App extends Component {
  render() {
    return (

      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} exact />
            <Route exact path="/signin" component={SignUp} />
            <Route exact path="/donor" component={Donor} />
            <Route exact path="/ngo" component={Ngo} />
          </Switch>
        </Router>
      </div>
    );
  };
}


export default App;
