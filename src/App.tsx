import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Section from './components/Section';
import GlobalStyles from './styles/GlobalStyles';

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.main`
  padding-top: 36px;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;


function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Router>
          <Header />
          <Main>
            <Section id="home">
              Home
            </Section>
            <Section id="about">
              About
            </Section>
            <Section id="experience">
              Experience
            </Section>
            <Section id="projects">
              Projects
            </Section>
          </Main>
        </Router>
      </Container>
    </>
  );
}

export default App;
