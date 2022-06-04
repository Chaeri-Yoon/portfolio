import styled from "styled-components"
import '../styles/variables.css';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-margin-top: calc(var(--header-height) * 2);
`;
const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 1em;
    text-transform: uppercase;
`;
export default ({ children, title, id }: { children?: any, title?: string, id: string }) => {
    return (
        <Container id={id}>
            {title && <Title>{title}</Title>}
            {children}
        </Container>
    )
}