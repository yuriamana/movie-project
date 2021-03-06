import React from "react";
import { Route, Switch } from "react-router-dom";
// pages components
import Home from "./views/Home";
// import Dashboard from "./views/Dashboard";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import MovieDetail from "./views/MovieDetail";
import MyAccount from "./views/MyAccount";


// partials
import NavMain from "./components/Nav";
// auth
import { UserContextProvider } from "./auth/UserContext";
// import { ProtectedRoute } from "./auth/ProtectedRoute";
// styles
// import "./styles/nav.css";

export default function App() {


  

  return (
    <UserContextProvider>
      <>
        <header>
          <NavMain />
        </header>
        <main id="content_main">
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/movie/:id" component={MovieDetail} />
            {/* check the protected route in src/auth folder */}
            <Route path="/dashboard" component={MyAccount} />
            {/* <Route path="/comment" component={Comment} /> */}
            <Route path="*" component={NotFound} />
            <Route path="/signout" component={Home} />
          </Switch> 
        </main>
        <footer>&copy;Priscilla | Joey | Yuki</footer>
      </>
    </UserContextProvider>
  );
}
