import React from "react";
import { NavLink } from "react-router-dom";

const logo = {
  paddingLeft : '30px',
  marginBottom : '110px',
  width : '9%',
}
function Navbarr() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
   <div class="container-fluid">
   <img style={logo} src="/logo.png" alt="Error" height={"100%"}/>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div  id="menu">
     <div class=" m-2 collapse navbar-collapse" id="navbarNavDropdown">
       <ul class="navbar-nav">
         <li class="nav-item">
           <NavLink class="nav-link active" aria-current="page" to="Home">Home</NavLink>
         </li>
         <li class="nav-item">
           <NavLink class="nav-link" to="Admission">ADMISSION</NavLink>
         </li>
         <li class="nav-item">
           <NavLink class="nav-link" to="About">About</NavLink>
         </li>
         <li class="nav-item">
           <NavLink class="nav-link" to="Error404">Error</NavLink>
         </li>
         <li class="nav-item">
           <NavLink class="nav-link" to="info">INFO</NavLink>
         </li>
         <li class="nav-item">
           <NavLink class="nav-link" to="Scholorship">SCHOLORSHIPS</NavLink>
         </li>
         <li class="nav-item">
           <NavLink class="nav-link" to="Contact">CONTACT US</NavLink>
         </li>
         
        
       </ul>
     </div>
     </div>
   </div>
 </nav>
    </>
  );
}

export default Navbarr;








  
// {/* 
//        */}