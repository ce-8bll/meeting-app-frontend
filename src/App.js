import './App.scss';
import React from "react";
import {BrowserRouter,Route,Switch}from "react-router-dom";
import Register from "./Components/Forms/UserForms/Register";
import EventForm from "./Components/Forms/EventForm/EventForm";
import Login from "./Components/Forms/UserForms/Login";
// import UserProfile from "./Components/Pages/UserProfile";
import Home from "./Components/Pages/Home";
import UserProfile from "./Components/Pages/UserProfile";
import Maps from './Components/Pages/Maps/Maps';
import Notifications from "./Components/Notifications"
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Event from './Components/Pages/Event';
import Careers from "./Components/Careers"
import Password from "./Components/Forms/UserForms/Password"
import DisplayOnline from "./Components/DisplayOnline"
import GeneratePassword from './Components/Forms/UserForms/GeneratePassword';


// import GuestRoute from "./Components/GuestRoute/GuestRoute";



function App() {
  return (
    <Notifications >
    <BrowserRouter>
    {/*<h1> home page</h1> */}

    {/* <NavBar /> */}
    <Switch>
      <Route path ="/event-form" component={EventForm} exact /> 
      <Route path ="/location" component={Maps} exact /> 
      <Route path ="/register" component={Register} exact />    
      <Route path ="/login" component={Login} exact />
      <Route path ="/forgetPassword" component={Password} exact />
      <Route path ="/resetPassword/:token" component={GeneratePassword} />
      {/* <GuestRoute path ="/register" component={Register} exact />    
      <GuestRoute path ="/login" component={Login} exact /> */}
      <PrivateRoute path ="/user_profile" component={UserProfile} exact />
     
      <Route path ="/event/:eventId" component={Event} /> 
      {/* <Route path="/newpassword/:token" component ={GeneratePassword} />  */}
      <Route path ="/" component={Home} exact />
      <Route path ="/about" component={About} exact />
      <Route path ="/careers" component={Careers} exact />
      <Route path ="/contact" component={Contact} exact />
      <Route path ="/events/online" component={DisplayOnline} />

    </Switch>

    </BrowserRouter>
    
    </Notifications>
  );
}

export default App;
