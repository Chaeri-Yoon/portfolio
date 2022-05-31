import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 500px;

    display: flex;
    justify-content: center;
    align-items: center;
`;
export default ({ children, id }: { children: any, id: string }) => {
    return (
        <Container id={id}>
            {children}
        </Container>
    )
}