import React   from "react";
 
import 'bootstrap/dist/css/bootstrap.min.css';
 


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


   const Header = () => {
  return (

    <> 
 
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

 {/* {/* <Navbar bg="light" expand="lg"> */}
   {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  
    */}
    <Navbar className=" shadow p-3 mb-5 bg-body rounded    navbar navbar-expand-lg navbar-light bg-light ">  
   
      <Container fluid>
        <Navbar.Brand href="/"> CollegeNest </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products/ ">Products</Nav.Link>
            
            <Nav.Link href="/login/ ">Login</Nav.Link>

            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/search/">Search</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>


              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}


            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
 
          </Nav>

        
          <Nav.Link href="/cart/ ">
           <svg class="cart-icon" width="27px" fill="none" 
          stroke="#444" viewBox="0 0 24 24 " xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
 d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z">

 </path>
          </svg>



          {/* <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> */}
           </Nav.Link>



 

        </Navbar.Collapse>
      </Container>
    </Navbar>


{/*     
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
<a className="nav-link" href="/products/ ">Products</a>
       
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
   
 </nav>       */}
   
      </>
  )
}


export default Header;


 