import { useState } from "react";
import styled from "styled-components";
import { ProjectIDType, projectsDetail } from "@data";
import { TabType } from ".";
import { ProjectCategory } from "@sections/project";
import PageButtons from "./About/PageButtons";

const Container = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const VisualContainer = styled.div`
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
const Image = styled.div<{ page: number, projectID: ProjectIDType }>`
    width: 100%;
    height: 100%;
    background-image: url(${({ page, projectID }) => `/images/projects/Web/${projectID}/${projectID}_${page + 1}.jpg`});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;
const DescriptionContainer = styled.div`
    width: 100%;
    aspect-ratio: 4 / 1;
    border: 1px solid black;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar{
        display: none;
    }
`;
const DemoURL = styled.span`
    font-size: 0.75em;
    color: blue;
    & > a{
        font-weight: 600;
    }
`;
export default ({ mode, projectCategory = 'XR', projectID }: { mode: TabType, projectCategory?: ProjectCategory, projectID: ProjectIDType }) => {
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
            <VisualContainer onClick={handlePageNumButton}>
                {mode === 'INTRO' && <video controls autoPlay src={`/videos/projects/${projectID}.mp4`} />}
                {mode === 'ABOUT' && projectCategory === 'XR' && projectsDetail(curPageNum)[projectID].Video}
                {mode === 'ABOUT' && projectCategory === 'WEB' && (
                    <>
                        <Image page={curPageNum} projectID={projectID} />
                        <PageButtons pageNums={projectsDetail(curPageNum)[projectID].pageNums} curPageNum={curPageNum} />
                    </>
                )}
            </VisualContainer>
            <DescriptionContainer>
                <p>
                    {mode === 'INTRO' && projectsDetail()[projectID].introduction}
                    {mode === 'ABOUT' && projectsDetail(curPageNum)[projectID].description}
                </p>
                {mode === 'ABOUT' && projectCategory === 'WEB' && curPageNum === 0 && (
                    <DemoURL>
                        <br />
                        &gt; Check out <a href="https://chaeri-yoon.github.io/pinki-talk-2021/">https://chaeri-yoon.github.io/pinki-talk-2021/</a>
                    </DemoURL>
                )}
            </DescriptionContainer>
        </Container>
    )
}