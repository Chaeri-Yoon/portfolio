import styled from "styled-components"

const Container = styled.div`
    padding: var(--header-height) 0 var(--header-height) 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-margin-top: calc(var(--header-height));
    &:first-child{
        padding: 0;
    }
    &:nth-child(2n){
        background-color: #F5F5F5;
    }
    &:not(:nth-child(2n)){
        background-color: white;
    }
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