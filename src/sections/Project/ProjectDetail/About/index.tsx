import { useState } from "react";
import styled from "styled-components";
import data from "./data";

const AboutContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const AboutVisual = styled.div`
    margin-bottom: 1em;
    width: 100%;
    aspect-ratio: 4 / 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    & > video{
        width: 100%;
        height: 100%;
    }
`;
const AboutDescription = styled.div`
    width: 100%;
    aspect-ratio: 4 / 1;
    border: 1px solid black;

    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar{
        display: none;
    }
`;
export default ({ projectId }: { projectId: string }) => {
    const [curPageNum, setCurPageNum] = useState(0);
    const handlePageNumButton = (event: React.MouseEvent<HTMLElement>) => {
        const { id } = event.target as HTMLElement;
        if (!id.includes('page')) return;
        setCurPageNum(+id.split('page')[1]);
    };
    return (
        <AboutContainer>
            <AboutVisual onClick={handlePageNumButton}>
                {projectId === 'K21' && data.K21(curPageNum).Visual}
            </AboutVisual>
            <AboutDescription>
                <span>{projectId === 'K21' && data.K21(curPageNum).description}</span>
            </AboutDescription>
        </AboutContainer>
    )
}