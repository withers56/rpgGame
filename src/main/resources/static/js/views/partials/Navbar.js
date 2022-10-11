import {isLoggedIn, userRole} from "../../auth.js";

export default function Navbar(props) {
    console.log(isLoggedIn());
    console.log(userRole());
    //language=html
    let html = `
            <nav class="navbar navbar-expand-lg background-bar-dark" id="top">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="#">Portal</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">


                `;

                if(isLoggedIn()){
                    html = html + `
                        <li class="nav-item">
                            <a href="/logout"  class="nav-link active" data-link>Logout</a>
                        </li>
                            `
                } else  {
                    html = html + `<li class="nav-item">
                            <a href="/login" class="nav-link active" data-link>Login</a>
                        </li>
                        <li class="nav-item">
                            <a href="/register" class="nav-link active" data-link>Register</a>
                        </li>`
                }

                if (userRole() == "MOD") {
                    html = html + `
                        <li class="nav-item">
                            <a href="/admin" class="nav-link active" data-link>Admin</a>
                        </li>
                    `
                }

                html = html + `</ul>
                        </div>
                      </div>
                    </nav>`

    return html;

}