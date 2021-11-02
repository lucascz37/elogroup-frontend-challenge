import { Link } from "react-router-dom";
import "./style.css";

const Header = ({ label, fun, path }) => (
  <div className="header">
    <h1>Elogroup</h1>
    <h1 className="page-name">Painel de Leads</h1>
    <Link className="header-link" to={path} onClick={fun}>
      <h1>{label} </h1>
    </Link>
  </div>
);

export default Header;
