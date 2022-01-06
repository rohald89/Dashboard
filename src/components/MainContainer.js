
import styled from 'styled-components';
import LineChart from './LineChart';

const MainStyles = styled.main`
    grid-area: main;
    background-color: rgb(36,43,68);
`

const MainContainer = () => {
    return (
        <MainStyles>
            <LineChart />
        </MainStyles>
    )
}

export default MainContainer
