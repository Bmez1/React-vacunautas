import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import VacunasAdmin from  './pages/VacunasAdmin';
import VacunasCrear from  './pages/VacunasCrear';
import VacunasEditar from './pages/VacunasEditar';
import Creditos from './pages/Creditos';


class App extends React.Component{


render(){

  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/vacunas" exact component={VacunasAdmin}></Route>
        <Route path="/vacunas-crear" exact component={VacunasCrear}></Route>
        <Route path="/vacunas-editar/:vacunaId" exact component={VacunasEditar}></Route>
        <Route path="/creditos" exact component={Creditos}></Route>
      </Switch>
    </Router>

  )
}

}








export default App;
