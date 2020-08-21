import React from 'react';
import {
  Container,
  Content,
  HeaderWrapper,
  Header,
  DropboxLogo
} from './styles';

const Section = ({ title, color, description }) => {
  return (
    <Container className={color}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>
              Dropbox
            </span>
          </h1>
          <button>
            Acessar
          </button>
        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  )
}

export default Section

