import * as React from 'react';
import styled from 'styled-components';

import FloatingButton from './FloatingButton';
import { mediaQuery } from '../themes';
import { ReactComponent as Logo } from './assets/corona-logo.svg';

const HeroContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 0;
  ${mediaQuery.tablet} {
    padding: 1rem 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 1.5em;
  margin-bottom: 0.1rem;
  ${mediaQuery.tablet} {
    font-size: 1.3em;
  }
`;

const HeroSubTitle = styled.p`
  font-size: 14px;
  opacity: 0.8;
`;
const LogoName = styled.div`
  position: absolute;
  left: 0;
`;

const StyledLogo = styled(Logo)`
  height: 120px;
  width: 120px;
  ${mediaQuery.tablet} {
    width: 80px;
    height: 80px;
  }
  fill: ${({ theme }) => theme.colors.textLight};
  opacity: 0.5;
`;

const Hero = () => (
  <HeroContainer>
  <LogoName>
  <div className="logo"><img src="http://www.malakavenu.com/images/logo.png" alt="" /></div>
  </LogoName>
    <FloatingButton />
    <StyledLogo className="app-logo" />
    <HeroTitle>Covid-19 Coronavirus Outbreak</HeroTitle>
    <HeroSubTitle>
      Data sources from{' '}
      <a
        href="https://github.com/malakavenu/covid19"
        target="_blank"
        rel="noopener noreferrer"
      >
        malakavenu
      </a>{' '}
      API
    </HeroSubTitle>
  </HeroContainer>
);

export default Hero;
