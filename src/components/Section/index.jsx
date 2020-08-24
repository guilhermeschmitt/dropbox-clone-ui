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
            </LogoContainer>
            <NavContainer>
              <NavActions>
                <button>
                  Acessar
                </button>
                <button>
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

