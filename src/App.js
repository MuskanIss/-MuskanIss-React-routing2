import "./App.css";
import { Router } from "./Pages/Router";
import { Link } from "react-router-dom";
import style from "styled-components";

const Nav = style.div`
display:flex;
background-color:blue;
padding:10px;
`;
const LinkTag = style.div`
margin:0px 10px;
`;
const LinkColor = style.div`
color:white;
text-decoration:underline;
`;

function App() {
  return (
    <div className="App">
      <Nav>
        <LinkTag>
          <Link to="/">
            <LinkColor>Home</LinkColor>
          </Link>
        </LinkTag>
        <LinkTag>
          <Link to="/login">
            <LinkColor>Login</LinkColor>
          </Link>
        </LinkTag>
        <LinkTag>
          <Link to="/dashboard">
            <LinkColor>Dashboard</LinkColor>
          </Link>
        </LinkTag>
        <LinkTag>
          <Link to="dashboard/settings">
            <LinkColor>Settings</LinkColor>
          </Link>
        </LinkTag>
      </Nav>
      <Router />
    </div>
  );
}

export default App;
