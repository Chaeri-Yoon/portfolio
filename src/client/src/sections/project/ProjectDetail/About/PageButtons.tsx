import styled from "styled-components";

const Container = styled.div`
    margin-top: 0.3em;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled.button<{ isactive: boolean }>`
    padding: 0;
    width: 0.6em;
    aspect-ratio: 1 / 1;
    border: 1px solid #f97087;
    border-radius: 50%;
    background-color: ${({ isactive }) => isactive ? '#f97087' : 'white'};
    &:not(:last-child){
        margin-right: 5px;
    }
`;
export default ({ numOfPages, curPageNum }: { numOfPages: number, curPageNum: number }) => {
    return (
        <Container>
            {Array.from({ length: numOfPages }).fill(1).map((_, i) => <Button key={i} id={`page${i}`} isactive={curPageNum === i} />)}
        </Container>
    )
};