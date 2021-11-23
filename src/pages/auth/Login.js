import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <Fragment>
            <div id="loader" className="app-loader">
                <span className="spinner"></span>
	        </div>
            <div id="app" className="app">
                <div className="login login-with-news-feed">
                    <div className="news-feed">
                        <div className="news-image" style={{backgroundImage: "url('../assets/img/login-bg/login-bg-11.jpg')"}}></div>
                    </div>

                    <div className="login-container">
                        <div className="login-header mb-30px">
                            <div className="brand">
                                <div className="d-flex align-items-center">
                                    <span className="logo"></span>

                                    <b>Vacunautas</b>
                                </div>
                                <small>Bootstrap 5 Responsive Admin Template</small>
                            </div>
                            <div className="icon">
                                <i className="fa fa-sign-in-alt"></i>
                            </div>
                        </div>

                        <div className="login-content">
                            <form action="index.html" method="GET" className="fs-13px">
                                <div className="form-floating mb-15px">
                                    <input type="text" className="form-control h-45px fs-13px" placeholder="Email Address" id="emailAddress" />
                                    <label htmlFor="emailAddress" className="d-flex align-items-center fs-13px text-gray-600">Email Address</label>
                                </div>
                                <div className="form-floating mb-15px">
                                    <input type="password" className="form-control h-45px fs-13px" placeholder="Password" id="password" />
                                    <label htmlFor="password" className="d-flex align-items-center fs-13px text-gray-600">Password</label>
                                </div>
                                <div className="form-check mb-30px">
                                    <input className="form-check-input" type="checkbox" value="1" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Remember Me
                                    </label>
                                </div>
                                <div className="mb-15px">
                                    <Link to="/home" type="submit" className="btn btn-success d-block h-45px w-100 btn-lg fs-14px">Ingresar</Link>
                                </div>
                                {/*<div className="mb-40px pb-40px text-inverse">
                                    Not a member yet? Click <Link to="#" className="text-primary">here</Link> to register.
                                </div>*/}
                                <hr className="bg-gray-600 opacity-2" />
                                <div className="text-gray-600 text-center text-gray-500-darker mb-0">
                                    &copy; Ganadores All Right Reserved 2021
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <Link to="#" className="btn btn-icon btn-circle btn-success btn-scroll-to-top" data-toggle="scroll-to-top"><i className="fa fa-angle-up"></i></Link>
            </div>
        </Fragment>

    )
}

export default Login;