
import styled from 'styled-components';
import { IoNotificationsOutline } from 'react-icons/io5';

const HeaderStyles = styled.header`
    grid-area: header;
    background-color: rgb(34,39,61);

    display: flex;
    align-items: center;
    color: white;
`

const Header = () => {
    return (
        <HeaderStyles>
            <h1>WebApp</h1>
            <IoNotificationsOutline size='35' />
        </HeaderStyles>
    )
}

export default Header
