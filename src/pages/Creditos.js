import React from "react";
import Navbar from "../components/Navbar";
class Creditos extends React.Component{

    render(){

        return(
        <div>
<Navbar></Navbar>
<div className=" main container">
    <div className="row">
        <div className="col-md-12">
            
                <table class="table table-striped table-hover table-bordered align-middle" display= "flex"  justify-content= "center">
                <thead>
                <tr bgcolor="#27BFAE" className="text-white"> 
                <th>Tripulante</th>
            <th>Descripción</th>
                </tr>
                </thead>
                <tbody>
                              
        <tr>
            <td>Daniel Alberto Martínez Lizarazo</td>
            <td>Líder del equipo</td>
        </tr>
        <tr>
            <td>Elizabeth Peña Cogollo</td>
            <td>Desarrolladora (Backend)</td>
        </tr>
        <tr>
            <td>Daniel Enrique Barros Agamez</td>
            <td>Desarrollador (Backend)</td>
        </tr>
        <tr>
            <td>Franklin Miguel Gómez Bastos</td>
            <td>Desarrollador (HTML, Fronted)</td>
        </tr>
        <tr>
            <td>Jorge Luis Lopera Marín </td>
            <td>Desarrollador (Fronted)</td>
        </tr>
        <tr>
            <td>Jairo Alberto Huertas Acevedo</td>
            <td>Desarrollador (Fronted)</td>
        </tr>
                             
                               
                            </tbody>
                            </table>
            
            
        </div>

    </div>
</div>
        </div>
        )
    }
}
export default Creditos