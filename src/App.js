import React, {useEffect} from 'react'
import Home from './Components/Home'
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Profile from './Components/Profile'
import Login from './Components/Login'
import { auth } from './firebase';

function App() {


  return (
    <div className="app">
      <Router>
        <Header/>

       
          <Switch>
            <Route exact path="/login">
              <Login/>
            </Route>
          <Route exact path="/">
               <div className="app_page">
                  {/*<Sidebar/>*/}
                  <Home/>
               </div>
          </Route>
          <Route exact path="/profile">
               <div className="app_page">
                  {/*<Sidebar/>*/}
                  <Profile/>
               </div>
          </Route>
        </Switch>
       

         </Router>

    </div>
  );
}

export default App;
