import React from 'react';
import {
  Container,
  Content,
  HeaderWrapper,
  Header,
  LogoContainer,
  NavContainer,
  NavActions,
  DropboxLogo,
  HeaderNav
} from './styles';

const Section = ({ title, color, description }) => {
  return (
    <Container className={color}>
      <HeaderWrapper>
        <Header>
          <HeaderNav>
            <LogoContainer>
              <DropboxLogo />
              <span className='logo-name'>
                Dropbox
              </span>
            </LogoContainer>
            <NavContainer>
              <NavActions>
                <span>
                  Para equipes
                </span>
                <span>
                  Para pessoas físicas
                </span>
              </NavActions>
              <NavActions>
                <button>
                  Acessar
                </button>
                <button className='register'>
                  Registrar-se
                </button>
                <button className='menu'>
                  Menu
                </button>
              </NavActions>
            </NavContainer>
          </HeaderNav>
        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  )
}

export default Section;

