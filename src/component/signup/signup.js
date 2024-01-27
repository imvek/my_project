export function Signup(){
    return(
        <div>
            <form>
                <h1>Sign Up</h1>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email Address" />
                <input type="text" name="mobile" placeholder="Mobile No." />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="password" placeholder="Confirm Password" />
                <p>Already have an account ? <a href="">Login</a></p>
                <button>Submit</button>
            </form>
        </div>
    )
}