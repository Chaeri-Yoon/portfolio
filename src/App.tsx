import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Section from './components/Section';
import About from './sections/About';
import Experience from './sections/Experience';
import Home from './sections/Home';
import Project from './sections/Project';
import GlobalStyles from './styles/GlobalStyles';

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.main`
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
              <Home />
            </Section>
            <Section id="about" title="about">
              <About />
            </Section>
            <Section id="experience" title="Education & Experience">
              <Experience />
            </Section>
            <Section id="projects" title="Projects">
              <Project />
            </Section>
          </Main>
        </Router>
      </Container>
    </>
  );
}

export default App;
