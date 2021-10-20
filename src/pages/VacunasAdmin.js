import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from "../utils/APIInvoke";
import { Link } from 'react-router-dom'
class VacunasAdmin  extends React.Component{

constructor(args){
    super(args)
    this.state={
        vacunas:[]
    }
}

async componentDidMount(){
    const response=await APIInvoke.invokeGET("/vacunas")
    this.setState({
        vacunas: response
    })
}

async remove(e,vacuna){
    e.preventDefault();
    await APIInvoke.invokeDELETE(`/vacunas/${vacuna.id}`)
}

async componentDidUpdate(){
    const response=await APIInvoke.invokeGET("/vacunas")
    this.setState({
        vacunas: response
    })
}

    render(){

        const arregloVacunas= this.state.vacunas


        return(
        <div>
<Navbar></Navbar>
<div className=" main container">
    <div className="row">
        <div className="col-md-12">
            <Link to="/vacunas-crear"className="btn btn-light btn-md font-weight-bold ">Agregar Vacuna</Link>
            <br/><br/>
            {
                arregloVacunas.length ===0 ? <div className="lert alert-warning">No existen registros.</div>:
                <table class="table table-striped table-hover table-bordered align-middle" display= "flex"  justify-content= "center">
                <thead>
                <tr bgcolor="#27BFAE" className="text-white"> 
                    <th align-middlescope="col">ID</th>
                    <th scope="col">Vacuna contra</th>
                    <th scope="col" className="col-md-2">Dosis</th>
                    <th scope="col">Laboratorio</th>
                    <th scope="col" className="col-md-2">Nº de Lote</th>
                    <th scope="col">Acciones</th>
                </tr>
                </thead>
                <tbody>
                                {
                                    arregloVacunas.map(
                                    vacuna=>
                <tr key={vacuna.id}>
                    <td >{vacuna.id}</td>
                    <td >{vacuna.nombre}</td>
                    <td>{vacuna.dosis}</td>
                    
                    <td>{vacuna.laboratorio}</td>
                    <td >{vacuna.num_lote}</td>
                   
                    <td className= "text-center" display="flex">
                    <td>
                        <Link to={`/vacunas-editar/${vacuna.id}`} className="btn btn-success btn-sm" title="Editar"><i className="fas fa-sync-alt"></i></Link>
                        </td><td> 
                        <button onClick={(e)=> this.remove(e, vacuna)} className="btn btn-danger btn-sm" title="Eliminar"><i className="far fa-trash-alt"></i></button>
                    </td></td>
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