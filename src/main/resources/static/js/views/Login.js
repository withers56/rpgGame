export default function Login(props) {
    return `

        <div class="">
            <div class="card w-50 m-auto login-card">
                        <div class="card-header background-card-dark">
                            <h2>Log in</h2>
                        </div>
                      <div class="card-body background-card-dark">
                        <form id="login-form">
                      <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control background-card-dark" id="username" aria-describedby="emailHelp">
                      </div>
                        
                      <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control background-card-dark" id="password">
                      </div>
                      <div class="d-flex">
                        <button type="submit" class="btn btn-primary" id="login-btn" value="Log in">Login</button>
                        <span class="d-flex align-items-center mx-2">Not Registered?<a href="/register" data-link>Register here.</a></span>
                      </div>
                        </form>
                      </div>
                    </div>
        </div>

                    
`;

}


