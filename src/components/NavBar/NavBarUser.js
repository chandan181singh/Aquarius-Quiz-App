import classes from './NavBarUser.module.css'

function NavBarUser() {
    return ( 
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li class="nav-item px-5">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item px-5">
                <a class="nav-link" href="#">Result</a>
              </li>
              </ul>
              
              <div >

              
                <a class="nav-link" href="#">Profile</a>
             
              </div>
             
              
            
          
          </div>
        </div>
      </nav>
     );
}

export default NavBarUser;