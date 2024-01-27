import './login.css'
export function Login(){
    return(
        <div>
            <form>
                <h1>Login</h1>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <p>Don't have an account ?<br/><a href="">Create An Account</a></p>
                <button>Submit</button>
            </form>
        </div>
    )
}