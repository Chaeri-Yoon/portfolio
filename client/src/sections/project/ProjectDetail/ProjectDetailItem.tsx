import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TabType } from ".";
import PageButtons from "./About/PageButtons";
import { ICategory, IProject } from "src/types";

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
const Image = styled.div<{ page: number, id: string }>`
    width: 100%;
    height: 100%;
    background-image: url(${({ page, id }) => `/images/projects/Web/${id}/${id}_${page + 1}.jpg`});
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
export default ({ mode, category = 'XR', data }: { mode: TabType, category?: ICategory, data: IProject }) => {
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
                {mode === 'INTRO' && <video controls autoPlay src={`${process.env.REACT_APP_SERVER_URL}/${data.video}`} />}
                {mode === 'ABOUT' && category === 'XR' && <Video pageNums={data.page_descriptions.length} curPageNum={curPageNum} source={data.page_visuals[curPageNum]} />}
                {mode === 'ABOUT' && category === 'WEB' && (
                    <>
                        <Image page={curPageNum} id={data._id} />
                        <PageButtons pageNums={data.page_descriptions.length} curPageNum={curPageNum} />
                    </>
                )}
            </VisualContainer>
            <DescriptionContainer>
                <p>
                    {mode === 'INTRO' && data.page_introduction}
                    {mode === 'ABOUT' && data.page_descriptions[curPageNum]}
                </p>
                {mode === 'ABOUT' && category === 'WEB' && curPageNum === 0 && (
                    <DemoURL>
                        <br />
                        &gt; Check out <a href={data.link} target="_blank">{data.link}</a>
                    </DemoURL>
                )}
            </DescriptionContainer>
        </Container>
    )
}
interface IVideo {
    pageNums: number;
    curPageNum: number;
    source: string;
}
const Video = ({ pageNums, curPageNum, source }: IVideo) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => videoRef?.current?.load(), [curPageNum]);
    return (
        <>
            <video autoPlay loop ref={videoRef} src={`${process.env.REACT_APP_SERVER_URL}/${source}`} />
            <PageButtons pageNums={pageNums} curPageNum={curPageNum} />
        </>
    )
}