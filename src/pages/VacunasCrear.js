import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import APIInvoke from "../utils/APIInvoke";


class VacunasCrear extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      nombre: "",
      dosis: "",
      viaAplicacion: "",
      laboratorio: "",
      num_lote: "",
      redi: false

    };

  }

  async componentDidMount() {
    document.getElementById("nombre").focus();
  }


  componentWillUnmount() {
    // document.removeEventListener()
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    });

  }


  handleSubmit = (ev) => {
    ev.preventDefault();
    this.add();
  }


  async add() {
    const data = {
      nombre: this.state.nombre.trim(),
      dosis: this.state.dosis.trim(),
      viaAplicacion: this.state.viaAplicacion.trim(),
      laboratorio: this.state.laboratorio.trim(),
      num_lote: this.state.num_lote.trim()
    };
    if (data.nombre === "" || data.dosis === "" || data.viaAplicacion === "" || data.laboratorio === "" || data.num_lote === "") {
      alert("Debe diligenciar todos los espacios del formulario");
    } else {
      //try{
      const response = await APIInvoke.invokePOST("/vacunas", data);

      document.getElementById("nombre").value = "";
      document.getElementById("dosis").value = "";
      document.getElementById("viaAplicacion").value = "";
      document.getElementById("laboratorio").value = "";
      document.getElementById("num_lote").value = "";

      if (response.id !== 0) {
        alert("Registro exitoso");
      } else {
        alert("Creación fallo");
      }

      if (this.state.redi === true) {
        //this.props.history.push(`/vacunas`)
        window.location = '/vacunas';
        this.setState({ redi: false })
      } else {
        //this.props.history.push(`/vacunas-crear`)
        window.location = '/vacunas-crear';
      }
    }

  }

  render() {
    return (
      //{redirect ? <Redirect to="/vacunas" />: null}
      <div>
        <Navbar></Navbar>


        <div id="div2">
          <section id="superior">
            <h1 id="div3">NUEVA VACUNA</h1>
          </section>
        </div>

        <form onSubmit={this.handleSubmit}>
          <section id="contenido">
            <div className="container border" id="div4">
              <div className="row">
                <div className="col">
                  <div className="col">
                    <label htmlFor="nombre" className="form-label">Nombre Vacuna</label>
                    <input type="nombre" name="nombre" className="form-control" id="nombre" aria-describedby="nombreDesc"
                      value={this.state.nombre} onChange={this.handleChange} />
                    <div id="nombreDesc" className="form-text">Máximo 100 caracteres permitidos.</div>
                  </div>
                </div>
                <div className="col">
                  <div className="col">
                    <label htmlFor="nombre" className="form-label">Laboratorio</label>
                    <input type="laboratorio" name="laboratorio" className="form-control" id="laboratorio" aria-describedby="nombreDesc"
                      value={this.state.laboratorio} onChange={this.handleChange} />
                    <div id="nombreDesc" className="form-text">Máximo 100 caracteres permitidos.</div>
                  </div>
                </div>
              </div>

              <div className="row" id="div1" >
                <div className="col">
                  <div className="col">
                    <label htmlFor="nombre" className="form-label">Dosis</label>
                    <br />
                    <select defaultValue="" type="dosis" name="dosis" id="dosis" className="form-select" aria-label="Default select example"
                      checked={this.state.dosis} onChange={this.handleChange}>
                      <option value="" >---- Seleccione ----</option>
                      <option value="Recien Nacido">Recien Nacido</option>
                      <option value="Única">Única</option>
                      <option value="Primera">Primera</option>
                      <option value="Segunda">Segunda</option>
                      <option value="Tercera">Tercera</option>
                      <option value="Primer Refuerzo">Primer Refuerzo</option>
                      <option value="Segundo Refuerzo">Segundo Refuerzo</option>
                      <option value="Anual">Anual</option>
                      <option value="Refuerzo">Refuerzo</option>
                    </select>

                  </div>
                </div>
                <div className="col">
                  <div className="col">
                    <label htmlFor="nombre" className="form-label">Nº de Lote</label>
                    <input type="num_lote" id="num_lote" name="num_lote" className="form-control" aria-describedby="nombreDesc"
                      value={this.state.num_lote} onChange={this.handleChange} />
                    <div id="nombreDesc" className="form-text">Máximo 20 caracteres permitidos.</div>
                  </div>
                </div>
                <div className="col">
                  <div className="col">
                    <label htmlFor="nombre" className="form-label">Via de Aplicación</label>
                    <br />
                    <select defaultValue="" type="viaAplicacion" name="viaAplicacion" id="viaAplicacion" className="form-select" aria-label="Default select example"
                      checked={this.state.viaAplicacion} onChange={this.handleChange} >
                      <option value="" >---- Seleccione ----</option>
                      <option value="Oral">Oral</option>
                      <option value="Intramuscular">Intramuscular</option>
                      <option value="Intravenosa">Intravenosa</option>
                      <option value="Intradérmica">Intradérmica</option>
                      <option value="Intradérmica - Oral">Intradérmica - Oral</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="container" id="div5" >
              <div id="div6">
                <Link to="/vacunas" type="submit" className="btn btn-danger">Cancelar</Link>
                &nbsp;&nbsp;
                <button onClick={(e) => this.setState({ redi: false })} id="btn1" type="submit" className="btn btn-success" >Registrar y Agregar Otra Vacuna</button>
                &nbsp;&nbsp;
                <button onClick={(e) => this.setState({ redi: true })} to="/vacunas" id="btn2" type="submit" className="btn btn-primary" >Registrar</button>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
  }
}
export default VacunasCrear;
