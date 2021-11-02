import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Lead from "./pages/Lead";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/lead" component={Lead} />
      </Switch>
    </Router>
  );
}

export default App;
