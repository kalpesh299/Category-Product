import React from 'react';
import {NavLink} from "react-router-dom"
import { FcHome } from "react-icons/fc";
import './Navigation.css'

const Navbar = () => {
    return (
        <div>
               <div className=" d-flex align-items-center navigation ">
              <NavLink className="" to="/"><span className=" d-flex navigation-home"> <FcHome/> </span></NavLink>
              <NavLink className="nav-link " to="category">Categories</NavLink>
              <NavLink className="nav-link  " to="product">Products</NavLink>
                     
              </div> 



                {/* <nav className="navbar navbar-expand-lg navbar-dark bg-white">
                <NavLink className="navbar-brand" to="/"><span style={{color: "#ffc107", fontWeight: "600",fontSize: "1.5rem",boxShadow: "0 2px 8px 0 #8e7e4e",padding: "13px"}}>  <FcHome/>  </span></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="category">Categories</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="product">Products</NavLink>
                        </li>
                        </ul>
                    </div>
                </nav>  */}
        </div>
    )
}

export default Navbar
