import Header from './components/Header';
import Nav from './components/Nav';
import MainContainer from './components/MainContainer';
import styled from 'styled-components';

const MainGrid = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-rows: 80px 1fr;
    grid-template-areas: 'header header' 'nav main';
`
  

function App() {
  return (
    <MainGrid>
      <Header />
      <Nav />
      <MainContainer />
    </MainGrid>
  );
}

export default App;
