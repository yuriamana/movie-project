import React from "react";
import { Route, Switch } from "react-router-dom";
// pages components
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
// partials
// import NavMain from "./components/NavMain";
// auth
import { UserContextProvider } from "./auth/UserContext";
import { ProtectedRoute } from "./auth/ProtectedRoute";
// styles
// import "./styles/nav.css";

export default function App() {
  return (
    <UserContextProvider>
      <>
        <header>
          {/* <NavMain /> */}
        </header>
        <main id="content_main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            {/* check the protected route in src/auth folder */}
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
        <footer>&copy;Priscilla | Joey | Yuki</footer>
      </>
    </UserContextProvider>
  );
}
