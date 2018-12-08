import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navigation';
import Foo from './Components/Footer';
import Main from './Components/Main';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
    <Nav/>
    <Main/>
    {/* <Foo/> */}
    </React.Fragment>
    );
  }
}

export default App;
