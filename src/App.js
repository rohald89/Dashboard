import Header from './components/Header';
import Nav from './components/Nav';
import MainContainer from './components/MainContainer';
import styled from 'styled-components';

// use this color palette for the app
// https://www.reddit.com/r/UI_Design/comments/ecbp19/as_a_ui_designer_do_you_find_this_color_palette/

const MainGrid = styled.div`
    color:rgb(205,211,227);
    min-height: 100vh;
    display: grid;
    grid-template-areas: 'header' 'nav' 'main';
    grid-template-rows: 80px 70px 1fr;
    @media (min-width: 768px) {
      grid-template-columns: 70px 1fr;
      grid-template-rows: 80px 1fr;
      grid-template-areas: 'header header' 'nav main';
    }
    @media (min-width: 1200px) {
      grid-template-columns: 150px 1fr;
    }
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
