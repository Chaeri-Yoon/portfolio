import { ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";
import PageButtons from "./sections/Project/ProjectDetail/About/PageButtons";

const Video = styled.video`
    width: 100%;
    height: 100%;
    background-color: black;
`;
// Project Data
interface IDataReturn {
    Visual: ReactElement;
    description: string;
    skills: string[];
}
type IData = (curPageNum?: number) => IDataReturn;
const K21: IData = (curPageNum = 0) => {
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
        description: descriptionSources[curPageNum],
        skills: [skills.UNITY, skills.VUFORIA]
    }
}
export const projects = {
    K21
}
export const skills = {
    HTMLCSSJS: "htmlcssjs",
    NODEJS: "nodejs",
    UNITY: "unity",
    VUFORIA: "vuforia",

    get topList() {
        return [
            this.UNITY,
            this.VUFORIA
        ]
    },
    get experienceList() {
        return [
            this.HTMLCSSJS,
            this.NODEJS,
            this.VUFORIA
        ]
    },
    get xrList() {
        return [
            this.UNITY,
            this.VUFORIA
        ]
    },
    get webList() {
        return [
            this.HTMLCSSJS,
            this.NODEJS
        ]
    }
}