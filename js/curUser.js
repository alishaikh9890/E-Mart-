
let curUser = JSON.parse(localStorage.getItem("curUser"));
document.querySelector(".cta").innerHTML = `

       ${ curUser && `<button onclick="showCart()" class="navbar-toggler bg-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
         <span id="cartlength"></span> 🛒 
        </button>
        `}
  ${ curUser 
    ?
     `
        <div class="dropdown">
         <button class="btn btn-secondary dropdown-toggle rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="::after { display:none !important; }" >
           <i class="fa-solid fa-user-tie"></i>
         </button>
         <ul class="dropdown-menu dropdown-menu-end">
           <li><a class="dropdown-item" href="#">${curUser.name}</a></li>
           <li><a class="dropdown-item" href="#">${curUser.email}</a></li>
            <li><hr class="dropdown-divider"></li>
           <li class="text-end">
               <button type="button" onclick="logOut()" class="navbar-toggler btn btn-danger active text-light fs-5 me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
               <i class="fa-solid fa-right-from-bracket"></i>
             </button>  
           </li>
         </ul>
       </div>
     `
     :
       `  <button type="button" class="navbar-toggler bg-success text-light fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
          login <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </button>
        `
        }
`

function logOut(){
 localStorage.removeItem("curUser");
 location.reload();
}