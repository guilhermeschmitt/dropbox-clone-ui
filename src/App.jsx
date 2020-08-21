import React, { useState } from 'react';

import data from './data';
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import GlobalStyles from './styles/GlobalStyles';

export default function App() {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {
        data.map(data => (
          <Section
            {...data}
            key={Math.random()}
            setIsActive={setIsActive}
          />
        ))
      }
      <SideMenu
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <GlobalStyles />
    </>
  );
}