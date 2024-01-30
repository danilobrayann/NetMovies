import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/netfilmes.webp";
import { Container, Menu, Li } from "./styles";
import { useState } from "react";
export default function Header() {

const {pathname} = useLocation();

console.log(pathname);

const [ ChageBacgraoud,setChageBacgraoud] = useState(false);

window.onscroll = () => {

  if (window.pageYOffset > 150) {
    
    setChageBacgraoud(true);
  }
  
  if (window.pageYOffset < 150) {
    
    setChageBacgraoud(false);
  }

};

  return (
    <Container ChageBacgraoud={ChageBacgraoud}>
      <img src={Logo} alt="" />
      <Menu>
        <Li 
        isActive={pathname === '/'}
        >
          <Link to="/">Home</Link>
        </Li>
        <Li
        isActive={pathname.includes('filmes')}
        >
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li
         isActive={pathname.includes('series')}
        >
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
}
