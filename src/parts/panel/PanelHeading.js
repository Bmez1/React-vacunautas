import React from "react";
import {Link} from "react-router-dom";

const PanelHeading = () => {
    return (
        <div className="panel-heading">
            <h4 className="panel-title">Panel Title here</h4>
            <div className="panel-heading-btn">
                <Link to="#" className="btn btn-xs btn-icon btn-default" data-toggle="panel-expand">
                    <i className="fa fa-expand"></i></Link>
                <Link to="#" className="btn btn-xs btn-icon btn-success" data-toggle="panel-reload">
                    <i className="fa fa-redo"></i></Link>
                <Link to="#" className="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse">
                    <i className="fa fa-minus"></i></Link>
                <Link to="#" className="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove">
                    <i className="fa fa-times"></i></Link>
            </div>
        </div>
    );
}

export default PanelHeading;
