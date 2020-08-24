import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 100px;
  --heading-font-size: 32px;
  --content-width: 100%;

  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }
  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
  }
  &.white {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-blue);
  }
  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }

  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;

    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 71px;
    }
  }

  background: var(--bg-color);
  position: relative;
`;


























export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  padding: 0;
  height: 70px;
  display: flex;
  margin: 0 auto;
  position: fixed;
  justify-content: center;
  background: var(--bg-color);
`;

export const HeaderNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-basis: auto;
  max-width: 1440px;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: calc(767px * (1 / 24));
  padding-right: calc(767px * (1 / 24));
`;

export const LogoContainer = styled.div`
  width: 36px;
  min-width: 36px;
  margin-right: 30px;
`;

export const NavContainer = styled.div`
  color: var(--text-color);
  width: auto;
  flex-grow: 1;
  display: flex;
  flex-basis: auto;
  align-items: center;
  justify-content: flex-start;
`;

export const NavActions = styled.section`
  display: flex;
  margin-left: auto;
  flex-direction: row;

  > button {
    border: none;
    outline: none;
    margin-left: 0;
    font-size: 18px;
    cursor: pointer;
    margin-right: 0; 
    background: none;
    padding: 10px 15px;
    line-height: 1.625em;
    color: var(--text-color);

    &:hover, &:focus {
      text-decoration: underline;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  margin-right: 6px;
  fill: var(--logo-color);
`;






















export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;

  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--content-width);
  }

  > p {
    margin-top 20px;
    font-size: 16px;
    color: var(--text-color);
    max-width: var(--content-width);
  }

  padding: var(--padding-top) 32px var(--padding-bottom) 

`;