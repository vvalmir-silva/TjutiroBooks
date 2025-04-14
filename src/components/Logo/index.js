

import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;  
`

  const LogoImagem = styled.img`
    margin-right: 10px;
  `

const Logo = () => {
  return (
    <LogoContainer >
      <LogoImagem src={logo} alt="logo principal da pagina" />
      <p>
        <strong>Tjutiro</strong>Books
      </p>
    </LogoContainer>
  );
};

export default Logo;
