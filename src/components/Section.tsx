import styled from "styled-components"
import '../styles/variables.css';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-margin-top: 3.625em;
`;
export default ({ children, id }: { children?: any, id: string }) => {
    return (
        <Container id={id}>
            {children}
        </Container>
    )
}