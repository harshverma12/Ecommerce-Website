import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { ReactNavbar } from "navbar.js";

// import logo from "../../../images/logo.png";


import 'bootstrap/dist/css/bootstrap.min.css';

  const Header = () => {
  return (
    <>
     {/* <div class="shadow-lg p-3 mb-5 bg-white rounded">  */}
<nav class=" navbar navbar-expand-lg navbar-light bg-light ">
 {/* <div class="shadow-lg p-3 mb-5 bg-white rounded">     */}
  <div class="container-fluid">
    <a class="navbar-brand" href="/">CollegeNest</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">


        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/products/">Products</a>
        {/* <a class="nav-link" href="#">Cart</a> */}
        <a class="nav-link" href="/login/">Login</a>

        {/* <a class="nav-link disabled">Disabled</a> */}
      </div>
    </div>
    
    </div>
</nav>


{/*  
       <nav class=" navbar navbar-dark bg-primary">
  <a class="navbar-brand" href="/">CollegeNest</a>

   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    
  </button> 
 
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="/nav-item nav-link/" href="/">Home <span class="sr-only"></span></a>
      <a class="/nav-item nav-link/" href="/products/">Products</a>
      <a class="/nav-item nav-link/" href="/cart/">Cart</a>
      <a class="/nav-item nav-link/" href="/login/">Login</a>
    </div>
  </div>
</nav>   */}



      </>
  )
}
export default Header














// const options = {
//   // burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products/",
//   link3Url: "/contact/",
//   link4Url: "/about/",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

// const Header = () => {
//   return <ReactNavbar {...options} />;
// };

// export default Header;
