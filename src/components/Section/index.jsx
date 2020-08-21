import React from 'react';
import { Container, Content } from './styles';

const Section = ({ title, color, description }) => {
  return (
    <Container className={color}>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  )
}

export default Section

