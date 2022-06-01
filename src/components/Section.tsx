import styled from "styled-components"
import '../styles/variables.css';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &::before{
        content: "";
        display: block;
        width: 100%;
        height: 3.625em;
    }
`;
export default ({ children, id }: { children?: any, id: string }) => {
    return (
        <Container id={id}>
            {children}
        </Container>
    )
}