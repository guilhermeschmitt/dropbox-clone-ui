import React from 'react';

import data from './data';
import Section from './components/Section';
import GlobalStyles from './styles/GlobalStyles';

export default function App() {
  return (
    <>
      {
        data.map(data => (
          <Section key={Math.random()} {...data} />
        ))
      }
      <GlobalStyles />
    </>
  );
}