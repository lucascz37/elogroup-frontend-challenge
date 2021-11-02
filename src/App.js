import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Lead from "./pages/Lead";
import { isAuth } from "./service/userService";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (isAuth() ? <Redirect to="/home" /> : <Login />)}
        />
        <Route
          path="/register"
          render={() => (isAuth() ? <Redirect to="/home" /> : <Register />)}
        />
        <Route
          path="/home"
          render={() => (isAuth() ? <Home /> : <Redirect to="/" />)}
        />
        <Route
          path="/lead"
          render={() => (isAuth() ? <Lead /> : <Redirect to="/" />)}
        />
      </Switch>
    </Router>
  );
}

export default App;
