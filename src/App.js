import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter, Link } from "react-router-dom";
import styledComponents from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>deliciouss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styledComponents(Link)`
text-decoration:none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
`;
const Nav = styledComponents.div`
padding: 4rem 0rem;
display:flex;
justify-content: flex-start;
align-items:cetner;
svg {
  font-size: 2rem;
}
`;

export default App;
