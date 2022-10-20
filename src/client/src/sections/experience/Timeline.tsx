import styled from 'styled-components';
const Container = styled.div`
    width: 55%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0.5% -0.8% 0.5%;
`;
const Box = styled.div`
    flex: 1;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid rgba(0, 0, 0, .3);
`;
const Line = styled.div<{ mainColor: string }>`
    width: 4%;
    height: 0.4em;
    background-color: ${({ mainColor }) => mainColor};
`;
const YearContainer = styled.div<{ mainColor: string }>`
    &, & > div{
        border-radius: 50%;
        aspect-ratio: 1 / 1;
    }
    width: 20%;
    border: 0.8em solid ${({ mainColor }) => mainColor};
    border-bottom-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ mainColor }) => mainColor};
    font-weight: 600;
    font-size: small;
    & > div{
        width: 70%;
        border: 1px solid rgba(0, 0, 0, .3);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
interface ITimeline {
    children: string,
    year: number,
    title: string,
    mainColor: string
}
export default ({ children, year, title, mainColor }: ITimeline) => {
    return (
        <Container>
            <Box>
                <span>{title}</span>
                <p>{children}</p>
            </Box>
            <Line mainColor={mainColor} />
            <YearContainer mainColor={mainColor}>
                <div>
                    <span>{year}</span>
                </div>
            </YearContainer>
        </Container>
    )
}