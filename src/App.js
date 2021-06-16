import logo from './logo.svg';
import * as Realm from "realm-web";
import { useState } from 'react';



import './App.css';

function App() {

const REALM_APP_ID = "portofolio-ckmbp"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });

function UserDetail({ user }) {
  return (
    <div>
      <h1>Logged in with anonymous id: {user.id}</h1>
    </div>
  );
}

// Create a component that lets an anonymous user log in
function Login({ setUser }) {
  const loginAnonymous = async () => {
    const user = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };
  return <button onClick={loginAnonymous}>Log In</button>;
}


  const [user, setUser] = useState(app.currentUser);

  // If a user is logged in, show their details.
  // Otherwise, show the login screen.
  return (
    <div className="App">
      <div className="App-header">

        <form className="login-register-parent">
          <label>E-mail</label>
          <input  type="e-mail "placeholder="e-mail"></input>
          <input type="password" placeholder="*******"></input>
          <input type="password" placeholder="*******"></input>
          <button type="submit">Register</button>
          <p>Already have account?
            <a href="/">Click here!</a></p>
        </form>
        {user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
      </div>
    </div>
  );
}

export default App;

// Create a component that displays the given user's details
