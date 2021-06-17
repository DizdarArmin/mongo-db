
import * as Realm from "realm-web";
import { useState } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Auth from './components/Auth';
import Expenses from './components/Expenses'




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

async function RegisterUser(email, password){
await app.registerUser(email, password);

}

  
  const [user, setUser] = useState(app.currentUser);



  return (
   
    <div className="App">
      <div className="App-header">

      <div className="flex-container">
        
        <a href="expenses">
        <i className="fas fa-calculator"></i>
        </a>

        <a href="login">
        <i className="fas fa-user-circle"></i>
        </a>
      </div>
        <Switch>
        <Route exact path="/">
            <h3>Welcome</h3>
          </Route>

          <Route exact path="/login" >
            <Auth path="/register" name="Login" message="Don't have account?"/>   
          </Route>
          <Route exact path="/register">
            <Auth Submit={()=> RegisterUser} path="/login" name="Register" message="Already have account?"/>   
          </Route>
          <Route exact path="/expenses">
            <Expenses/>
          </Route>

    </Switch>

      </div>


    </div>

  );
}

export default App;

// Create a component that displays the given user's details
