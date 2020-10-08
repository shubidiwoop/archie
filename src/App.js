import React, { Component } from 'react';
import Home from './pages/home';
import SignUp from './pages/SignUp';
import Ngo from './pages/ngo';
import Donor from './pages/donor';



class App extends Component{
  render(){
    return (
      <div>
        <Donor />
      </div>
    );
  };
}


export default App;
