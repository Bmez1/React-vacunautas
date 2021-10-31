import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from "../utils/APIInvoke";
import { Link } from 'react-router-dom'

class VacunasAdmin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            vacunas: []
        };

    }


    async componentDidMount() {

        const response = await APIInvoke.invokeGET("/vacunas")
        this.setState({
            vacunas: response
        })
        //this.mounted=true;
    }


    async remove(e, vacuna) {
        e.preventDefault();

        const response = await APIInvoke.invokeDELETE(`/vacunas/${vacuna.id}`)
        this.componentDidMount();
        if (response.id !== 0) { alert("Registro eliminado"); }
        //this.mounted=true;
    }

    render() {

        const arregloVacunas = this.state.vacunas

        return (
            <div>
                <Navbar></Navbar>
                <div className=" main container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/vacunas-crear" className="btn btn-light btn-md font-weight-bold ">Agregar Vacuna</Link>
                            <br /><br />
                            {
                                arregloVacunas.length === 0 ? <div className="alert alert-warning">No existen registros.</div> :
                                    <table className="table table-striped table-hover table-bordered align-middle" display="flex" justify-content="center">
                                        <thead>
                                            <tr bgcolor="#27BFAE" className="text-white">
                                                <th align-middlescope="col">ID</th>
                                                <th scope="col">Vacuna</th>
                                                <th scope="col" className="col-md-2">Dosis</th>
                                                <th scope="col">Laboratorio</th>
                                                <th scope="col" className="col-md-2">Nº de Lote</th>
                                                <th scope="col" className="col-md-2">Via de Aplicación</th>
                                                <th scope="col" colSpan="2">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                arregloVacunas.map(
                                                    vacuna =>
                                                        <tr key={vacuna.id}>
                                                            <td >{vacuna.id}</td>
                                                            <td >{vacuna.nombre}</td>
                                                            <td>{vacuna.dosis}</td>

                                                            <td>{vacuna.laboratorio}</td>
                                                            <td >{vacuna.num_lote}</td>
                                                            <td >{vacuna.viaAplicacion}</td>
                                                            <td >
                                                                <Link to={`/vacunas-editar/${vacuna.id}`} className="btn btn-success btn-sm" title="Editar"><i className="fas fa-sync-alt"></i></Link>
                                                            </td>
                                                            <td>
                                                                <button onClick={(e) => this.remove(e, vacuna)} className="btn btn-danger btn-sm" title="Eliminar"><i className="far fa-trash-alt"></i></button>
                                                            </td>
                                                        </tr>
                                                )
                                            }

                                        </tbody>
                                    </table>

                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default VacunasAdmin