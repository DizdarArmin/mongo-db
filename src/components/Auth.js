import { useState } from "react";

export default function Auth({path, name, message, Submit}){
    const [toggleAuth, setAuth] = useState(false)
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [retryPassword, setRetryPassword] = useState("")

    function handleUserName(e){
        e.preventDefault();
        setEmail(e.target.value);
    }

    function handlePassword(e){
        e.preventDefault();
        setPassword(e.target.value);
    }
    function passwordRetype(e){
        e.preventDefault();
        setRetryPassword(e.target.value);
    }

    function submit(){
        console.log("submit")
        Submit(email,password);
      }
    return(
        <div className="form-outline">
        <form onSubmit={submit}>
        <h2>{name}</h2>
        <label>E-mail</label>
        <input  onChange={handleUserName} 
                className="form-control" 
                type="e-mail "
                placeholder="e-mail"></input>
        <label>Password</label>
        <input  onChange={handlePassword}
                className="form-control" 
                type="password" 
                placeholder="*******"></input>
        {(name==="Register") &&
        <>
        <label>Re-type password</label>
        <input  onChange={passwordRetype}
                className="form-control" 
                type="password" 
                placeholder="*******"></input>
        </>
        }

        <br></br>
        <button className="btn btn-success btn-lg"type="submit">{name}</button>
        <p>{message}
          <a href={path}>Click here!</a></p>
      </form >
      </div>
    )
}