/**
 * library
 */
import { BrowserRouter, Switch, Route } from "react-router-dom";

/**
 * Components
 */
import Home from "./pages/home";
import Signin from "./pages/signin";

function routes(){
  return (
        <BrowserRouter>
            <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/Signin" component={Signin}/>
            </Switch>
        </BrowserRouter>
    )

}


export default routes;