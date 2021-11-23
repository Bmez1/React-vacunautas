import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import VacunasAdmin from './pages/VacunasAdmin';
import VacunasCrear from './pages/VacunasCrear';
import VacunasEditar from './pages/VacunasEditar';
import Creditos from './pages/Creditos';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Login/>}></Route>
                    <Route path="/home" exact element={<Home/>}></Route>
                    <Route path="/vacunas" exact element={<VacunasAdmin/>}></Route>
                    <Route path="/vacunas-crear" exact element={<VacunasCrear/>}></Route>
                    <Route path="/vacunas-editar/:vacunaId" exact element={<VacunasEditar/>}></Route>
                    <Route path="/creditos" exact element={<Creditos/>}></Route>
                </Routes>
            </Router>
        </Fragment>

    )
}

export default App;
