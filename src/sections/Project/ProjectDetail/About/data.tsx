import { ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";
import PageButtons from "./PageButtons";

const Video = styled.video`
    width: 100%;
    height: 100%;
    background-color: black;
`;
interface IData {
    Visual: ReactElement;
    description: string;
}
const K21 = (curPageNum: number): IData => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const visualSources = [
        <source src='/videos/projects/about/K21_1.mp4' />,
        <source src='/videos/projects/about/K21_2.mp4' />,
        <source src='/videos/projects/about/K21_3.mp4' />
    ];
    const descriptionSources = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Cras nibh purus, semper a congue egestas',
        'magna ac aliquet fringilla, arcu purus convallis risus, vel consequat massa lacus pulvinar sapien.'
    ];
    useEffect(() => videoRef.current?.load(), [curPageNum]);
    return {
        Visual: (
            <>
                <Video autoPlay loop ref={videoRef}>
                    {visualSources[curPageNum]}
                </Video>
                <PageButtons numOfPages={3} curPageNum={curPageNum} />
            </>
        ),
        description: descriptionSources[curPageNum]
    }
}
export default {
    K21
}