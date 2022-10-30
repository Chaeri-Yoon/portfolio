import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ProjectIDType, ProjectCategory, projectsDetail } from "@data";
import { TabType } from ".";
import PageButtons from "./About/PageButtons";

const Container = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const VisualContainer = styled.div`
    margin-bottom: 0.5em;
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
export default ({ mode, projectCategory = 'XR', projectID }: { mode: TabType, projectCategory?: ProjectCategory, projectID: string }) => {
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
            {/* <VisualContainer onClick={handlePageNumButton}>
                {mode === 'INTRO' && <video controls autoPlay src={`/videos/projects/${projectID}.mp4`} />}
                {mode === 'ABOUT' && projectCategory === 'XR' && <Video pageNums={projectsDetail[projectID].pageNums} curPageNum={curPageNum} projectID={projectID} />}
                {mode === 'ABOUT' && projectCategory === 'WEB' && (
                    <>
                        <Image page={curPageNum} projectID={projectID} />
                        <PageButtons pageNums={projectsDetail[projectID].pageNums} curPageNum={curPageNum} />
                    </>
                )}
            </VisualContainer>
            <DescriptionContainer>
                <p>
                    {mode === 'INTRO' && projectsDetail[projectID].introduction}
                    {mode === 'ABOUT' && projectsDetail[projectID].descriptions[curPageNum]}
                </p>
                {mode === 'ABOUT' && projectCategory === 'WEB' && curPageNum === 0 && (
                    <DemoURL>
                        <br />
                        &gt; Check out <a href={projectsDetail[projectID]?.link} target="_blank">{projectsDetail[projectID]?.link}</a>
                    </DemoURL>
                )}
            </DescriptionContainer> */}
        </Container>
    )
}
interface IVideo {
    pageNums: number;
    curPageNum: number;
    projectID: ProjectIDType;
}
const Video = ({ pageNums, curPageNum, projectID }: IVideo) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => videoRef?.current?.load(), [curPageNum]);
    return (
        <>
            <video autoPlay loop ref={videoRef}>
                <source src={`/videos/projects/about/${projectID}/${projectID}_${curPageNum + 1}.mp4`} />,
            </video>
            <PageButtons pageNums={pageNums} curPageNum={curPageNum} />
        </>
    )
}