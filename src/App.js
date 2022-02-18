import "./App.css";
import { Router } from "./Pages/Router";
import { Link } from "react-router-dom";
import style from "styled-components";

const Nav = style.div`
display:flex;
`;

function App() {
  return (
    <div className="App">
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="dashboard/settings">Settings</Link>
      </Nav>
      <Router />
    </div>
  );
}

export default App;
