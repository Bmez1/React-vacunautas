import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import APIInvoke from "../utils/APIInvoke";
import "./VacunasCrear.css";

class VacunasCrear extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      nombre: "",
      dosis:"",
      viaAplicacion:"",
      laboratorio:"",
      num_lote:""
    };
   // this.handleInputChange=this.handleInputChange.bind(this);
  }

  componentDidMount() {
    document.getElementById("nombre").focus();
  }
/*  handleChange(e){
    this.setState({
        nombre: e.target.value
    })
}*/
  handleChange=(e) =>{
    const {name, value}=e.target
    
    this.setState({
      [name]:value
    });
  
  }

/*handleInputChange(e){
    const target=e.target;
    const value=target.type==='text' ? target.checked: target.value;
    const name=target.name;

    this.setState({
     [name]:value
    });
    
}*/
 
  async add() {
    const data = {
      nombre: this.state.nombre,
      dosis: this.state.dosis,
      viaAplicacion: this.state.viaAplicacion,
      laboratorio: this.state.laboratorio,
      num_lote: this.state.num_lote
    };
    const response = await APIInvoke.invokePOST("/vacunas", data);
    if (response.id !== 0) {
    
      this.props.history.push("/vacunas");
    
    } else {
      console.log(response.message);
     // alert.show('Debe llenar todos los campos')
    }
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>


        <div id="div2">
        <section id="superior">
            <h1 id="div3" >NUEVA VACUNA</h1>
        </section>
    </div>
  
    <form>
    <section id="contenido">
        <div className="container border" id="div4">
            <div className="row">
              <div className="col">
                <div className="col">
                    <label htmlFor="nombre" className="form-label">Nombre Vacuna</label>
                    <input type="nombre" name="nombre" className="form-control" id="nombre" aria-describedby="nombreDesc" 
                     value={this.state.nombre}   onChange={this.handleChange} />
                    <div id="nombreDesc" className="form-text">Máximo 100 caracteres permitidos.</div>
                  </div>
              </div>
              <div className="col">
                <div className="col">
                    <label  htmlFor="nombre" className="form-label">Laboratorio</label>
                    <input  type="laboratorio" name="laboratorio" className="form-control" id="laboratorio" aria-describedby="nombreDesc"
                    value={this.state.laboratorio}   onChange={this.handleChange} />
                    <div id="nombreDesc" className="form-text">Máximo 100 caracteres permitidos.</div>
                </div>
              </div>   
            </div>

            <div className="row" id="div1" >
                <div className="col">
                    <div className="col">
                        <label  htmlFor="nombre" className="form-label">Dosis</label>
                        <br/>
                        <select type="dosis" name="dosis"  id="dosis" className="form-select" aria-label="Default select example"
                        checked={this.state.dosis}   onChange={this.handleChange}>
                            <option value="" selected>---- Seleccione ----</option>
                            <option value="Recien Nacido">Recien Nacido</option>
                            <option value="Única">Única</option>
                            <option value="Primera">Primera</option>
                            <option value="Segunda">Segunda</option>
                            <option value="Tercera">Tercera</option>
                            <option value="Primer Refuerzo">Primer Refuerzo</option>
                            <option value="Segundo Refuerzo">Segundo Refuerzo</option>
                            <option value="Anual">Anual</option>
                          </select>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="col">
                        <label htmlFor="nombre" className="form-label">Nº de Lote</label>
                        <input type="num_lote" id="num_lote"  name="num_lote"  className="form-control"  aria-describedby="nombreDesc"
                         value={this.state.num_lote}   onChange={this.handleChange} />
                        <div id="nombreDesc" className="form-text">Máximo 20 caracteres permitidos.</div>
                    </div>
                </div>
                <div className="col">
                    <div className="col">
                        <label htmlFor="nombre" className="form-label">Via de Aplicación</label>
                        <br/>
                        <select type="viaAplicacion" name="viaAplicacion" id="viaAplicacion" className="form-select" aria-label="Default select example"
                        checked={this.state.viaAplicacion}   onChange={this.handleChange} >
                            <option value="" selected>---- Seleccione ----</option>
                            <option value="Oral">Oral</option>
                            <option value="Intramuscular">Intramuscular</option>
                            <option value="Intravenosa">Intravenosa</option>
                          </select>
                    </div>
                </div>
              </div>
          </div>
         
        <div className="container" id="div5" >
            <div id="div6">
                <Link to="/vacunas" type="submit" className="btn btn-danger">Cancelar</Link>
                &nbsp;&nbsp;
                <button type="submit" className="btn btn-success" onClick={this.add.bind(this)}>Registrar y Agregar Otra Vacuna</button>
                &nbsp;&nbsp;
                <button  type="submit" className="btn btn-primary" onClick={this.add.bind(this)}>Registrar</button>  
            </div>   
        </div>
        </section>
    </form>


      </div>
    );
  }
}
export default VacunasCrear;
