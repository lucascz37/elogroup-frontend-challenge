import "./style.css";

const Header = ({ label, labelFunction }) => (
  <div className="header">
    <h1>Elogroup</h1>
    <h1 className="page-name">Painel de Leads</h1>
    <h1 onClick={labelFunction}>{label}</h1>
  </div>
);

export default Header;
