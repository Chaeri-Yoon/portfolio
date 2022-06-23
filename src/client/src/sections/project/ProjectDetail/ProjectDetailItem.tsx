import { useState } from "react";
import styled from "styled-components";
import { ProjectIDType, projects } from "@data";
import { TabType } from ".";

const Container = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const VideoContainer = styled.div`
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
        background-color: black;
    }
`;
const DescriptionContainer = styled.div`
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
export default ({ mode, projectID }: { mode: TabType, projectID: ProjectIDType }) => {
    // For 'About' Tab
    const [curPageNum, setCurPageNum] = useState(0);
    const handlePageNumButton = (event: React.MouseEvent<HTMLElement>) => {
        const { id } = event.target as HTMLElement;
        if (!id.includes('page')) return;
        setCurPageNum(+id.split('page')[1]);
    };
    //
    return (
        <Container>
            <VideoContainer onClick={handlePageNumButton}>
                {mode === 'INTRO' && <video controls autoPlay src={`/videos/projects/${projectID}.mp4`} />}
                {mode === 'ABOUT' && projects(curPageNum)[projectID].Video}
            </VideoContainer>
            <DescriptionContainer>
                {mode === 'INTRO' && projects()[projectID].introduction}
                {mode === 'ABOUT' && projects(curPageNum)[projectID].description}
            </DescriptionContainer>
        </Container>
    )
}