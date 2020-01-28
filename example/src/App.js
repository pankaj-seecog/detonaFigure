import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './Slider';
import Detail from './Detail';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Slider/>
    <Switch>
      <Route path="/:id" component={Detail}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
