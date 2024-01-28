import { Link } from "react-router-dom";
import Logo from "../../assets/netfilmes.webp";
import { Container, Menu, Li } from "./styles";

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="" />
      <Menu>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
}
