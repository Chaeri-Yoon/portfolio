import styled from 'styled-components';
import NavBar from "./NavBar"

const Container = styled.div`
    position: fixed;
    top: 0.75em;
    right: 6.25em;

    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export default () => {
    return (
        <Container>
            <NavBar />
        </Container>
    )
}