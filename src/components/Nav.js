
import styled from 'styled-components';
import { IoHomeOutline, IoPeopleOutline, IoBarChartOutline, IoSettingsOutline } from 'react-icons/io5';

const NavStyles = styled.nav`
    grid-area: nav;
    background-color: rgb(42,50,79);
    padding: 1rem;
    display: flex;
    gap: 1.5em;
    align-items: center;
    justify-content: space-around;
    @media (min-width: 768px) {
        flex-direction: column;
        justify-content: start;
    }
`

const Nav = () => {
    return (
        <NavStyles>
            <IoHomeOutline size='35'  />
            <IoBarChartOutline size='35'  />
            <IoPeopleOutline size='35'  />
            <IoSettingsOutline size='35'  />
        </NavStyles>
    )
}

export default Nav
