import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from "../utils/APIInvoke";
import './VacunasEditar.css'
import { Link } from "react-router-dom";

class VacunasEditar extends React.Component {
  constructor(args) {
    super(args)
    this.state = {
      id: '',
      nombre: '',
      dosis: '',
      viaAplicacion: '',
      laboratorio: '',
      num_lote: ''
    };
  }

  async componentDidMount() {
    document.getElementById("nombre").focus();
    const vacunaId = this.props.match.params.vacunaId
    const response = await APIInvoke.invokeGET(`/vacunas/${vacunaId}`)
    this.setState({
      id: response.id,
      nombre: response.nombre,
      dosis: response.dosis,
      viaAplicacion: response.viaAplicacion,
      laboratorio: response.laboratorio,
      num_lote: response.num_lote
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    });

  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.edit()
  }

  async edit() {
    const data2 = {
      id: this.state.id,
      nombre: this.state.nombre.trim(),
      dosis: this.state.dosis.trim(),
      viaAplicacion: this.state.viaAplicacion.trim(),
      laboratorio: this.state.laboratorio.trim(),
      num_lote: this.state.num_lote.trim()
    }
    if (data2.nombre === "" || data2.dosis === "" || data2.viaAplicacion === "" || data2.laboratorio === "" || data2.num_lote === "") {
      alert("Debe diligenciar todos los espacios del formulario");
    } else {
      const response = await APIInvoke.invokePUT(`/vacunas`, data2)

      document.getElementById("nombre").value = "";
      document.getElementById("dosis").value = "";
      document.getElementById("viaAplicacion").value = "";
      document.getElementById("laboratorio").value = "";
      document.getElementById("num_lote").value = "";

      if (response.id !== 0) {
        this.props.history.push(`/vacunas`)
        alert("Cambio exitoso");
      } else {
        alert("Cambio fallo");
      }
      //window.location='/vacunas';
    }
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>

        <div id="div2">
          <section id="superior">
            <h1 id="div3" >EDITAR VACUNA</h1>
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
                    <select value={this.state.dosis} type="dosis" name="dosis" id="dosis" className="form-select" aria-label="Default select example"
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
                    <select value={this.state.viaAplicacion} type="viaAplicacion" name="viaAplicacion" id="viaAplicacion" className="form-select" aria-label="Default select example"
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

                <button href="/vacunas" type="submit" className="btn btn-primary" >Actualizar</button>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default VacunasEditar;
