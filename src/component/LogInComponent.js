const LogInComponent = () => {
    return(
        <div>
            <h1> LOGIN</h1>
           <label for="Email"></label>
           <input id="email" name="email" type="text" placeholder="Email" required />
           <label for="Password"></label>
            <input id="password" name="Password" type="password" placeholder="Password" required />
            <button id="submitButton">LogIn</button>
        </div>
    )
    }
    
    export default LogInComponent
