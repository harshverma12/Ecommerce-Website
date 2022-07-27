import React   from "react";
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MetaData from "../layout/MetaData";
// import { ReactNavbar } from "navbar.js";

// import logo from "../../../images/logo.png";
//  import  bootstrap.bundle.min.js   ;
import 'bootstrap/dist/css/bootstrap.min.css';
// import { DropdownButton , Dropdown } from "react-bootstrap";

 
  const Header = () => {
  return (

    <> 
     {/* <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
        integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1"
        crossorigin="anonymous"></script> */}

<nav className=" shadow p-3 mb-5 bg-body rounded    navbar navbar-expand-lg navbar-light bg-light ">  
   
  <div className="container-fluid">

    <a className="navbar-brand" href="/">CollegeNest</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav">

<li>

<a className="nav-link active" aria-current="page" href="/">Home</a>
       
</li> 
<li> 
<a className="nav-link" href="/products/">Products</a>
       
  </li>  

        <li>  
        <a className="nav-link" href="/login/">Login</a>
      
</li>



<div> <li class="dropdown">
	  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
		Dropdown button
	  </button>
	  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
		<li><a class="dropdown-item" href="#">Action</a></li>
		<li><a class="dropdown-item" href="#">Another action</a></li>
		<li><a class="dropdown-item" href="#">Something else here</a></li>
	  </ul>
	</li>

  </div>


  
      </ul>
    
    </div>
 
 

    </div>
   
 </nav>      
   
      </>
  )
}


export default Header;


 