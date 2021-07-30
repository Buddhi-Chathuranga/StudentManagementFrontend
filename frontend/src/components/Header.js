import React from "react";
import {Link} from 'react-router-dom';

function Header(){

    return (

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">ABC University</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item active">
            <Link class="nav-link" to="/Home" class="nav-link">Home<span class="sr-only">(current)</span></Link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Student
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="/addStudent" class="nav-link">Add Student</Link>
              <Link class="dropdown-item" to="/studentList" class="nav-link">Student List</Link>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Special</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Lecturer
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="/addLecturer" class="nav-link">Add Lecturer</Link>
              <Link class="dropdown-item" to="/lecturerList" class="nav-link">Lecturer List</Link>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Special</a>
            </div>
          </li>

        </ul>
      </div>
    </nav>








        
    )

}

export default Header;