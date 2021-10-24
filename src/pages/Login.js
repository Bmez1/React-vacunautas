import React from "react";
import './Login.css'
import { Link } from 'react-router-dom'

class Login extends React.Component{

componentDidMount(){
    document.getElementById("user").focus()
}

    render(){
        return(<div> <br/><br/><br/>
        <div className="login-wrap">
           
             <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Iniciar Sesión (BETA)</label>          
                <div className="login-form">
                        <div className="group">
                            <label htmlFor="user" className="label">Usuario</label>
                            <input id="user" type="text" className="input"/>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Contraseña</label>
                            <input id="pass" type="password" className="input" data-type="password"/>
                        </div>
                        <div className="text-right " id="register-link">
                            <Link  to="#" className="text-white ">Crear Cuenta</Link>                 
                        </div>
                        <div className="group">
                            <Link  to="/home" className="btn btn-info btn-md">Ingresar</Link>                 
                        </div>
                        <div className="hr"></div>
                </div>
            </div>
        </div></div>
        )
    }
}
export default Login