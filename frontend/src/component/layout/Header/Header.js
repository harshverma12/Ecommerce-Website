import React   from "react";
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MetaData from "../layout/MetaData";
// import { ReactNavbar } from "navbar.js";

// import logo from "../../../images/logo.png";
 
import 'bootstrap/dist/css/bootstrap.min.css';
 
 
// const Search = ({ history }) => {
//   const [keyword, setKeyword] = useState("");

//   const searchSubmitHandler = (e) => {
//     e.preventDefault();
//     if (keyword.trim()) {
//       history.push(`/products/${keyword}`);
//     } else {
//       history.push("/products");
//     }
//   };

  // return (
    // <Fragment>
    //   <MetaData title="Search A Product -- ECOMMERCE" />
    //   <form className="searchBox" onSubmit={searchSubmitHandler}>
    //     <input
    //       type="text"
    //       placeholder="Search a Product ..."
    //       onChange={(e) => setKeyword(e.target.value)}
    //     />
    //     <input type="submit" value="Search" />
    //   </form>
    // </Fragment>
  // );
// };
  



  const Header = () => {
  return (
    <>
    {/* <div class="shadow p-3 mb-5 bg-body rounded">  */}

 
 


<nav class=" shadow p-3 mb-5 bg-body rounded    navbar navbar-expand-lg navbar-light bg-light ">  
   
  <div class="container-fluid">
    <a class="navbar-brand" href="/">CollegeNest</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav">

<li>

<a class="nav-link active" aria-current="page" href="/">Home</a>
       
</li> 
<li> 
<a class="nav-link" href="/products/">Products</a>
       
  </li>  

        <li>  
        <a className="nav-link" href="/login/">Login</a>
      
</li>

<li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">More </a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Inbox</a>
                            <a href="#" class="dropdown-item">Drafts</a>
                            <a href="#" class="dropdown-item">Sent Items</a>
                            <div class="dropdown-divider"></div>
                            <a href="#"class="dropdown-item">Trash</a>
                        </div>
                    </li>
      </ul>
    
    </div>
 
 

    </div>
   
 </nav>



      </>
  )
}


export default Header;


 