import styled from 'styled-components';
import NavBar from "./NavBar"

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: pink;
    z-index: 99;
`;

export default () => {
    return (
        <Container>
            <NavBar />
        </Container>
    )
}