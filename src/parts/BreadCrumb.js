import React, {Fragment} from "react";
import {Link} from "react-router-dom";

const BreadCrumb = () => {
    return (
        <Fragment>
            <ol className="breadcrumb float-xl-start">
                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                <li className="breadcrumb-item active">Data</li>
            </ol>
            <h1 className="page-header">Dashboard <small>header small text goes here...</small></h1>
        </Fragment>
    );
}

export default BreadCrumb;
