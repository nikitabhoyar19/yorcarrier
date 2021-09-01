import React from "react";
import './App.css';
import 'boxicons'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Python from "./pages/Python";
import WebDevelopment from "./pages/WebDevelopment";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
          {/* python */}
        <Route path="/Python" component={Python}>
            <Python />
        </Route>

        {/* Web Development */}
        <Route path="/WebDevelopment" component={WebDevelopment}>
            <WebDevelopment />
        </Route>

        {/* Register */}
        <Route path="/Register" component={Register}>
            <Register />
        </Route>


          {/* Home */}
          <Route path="/" component={Home}>
            <Home />
        </Route>
          

        </Switch>
          </BrowserRouter>

   </div>
  );
}

export default App;
