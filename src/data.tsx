import { ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";
import PageButtons from "@sections/project/ProjectDetail/About/PageButtons";

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
interface IVisual {
    numOfPages: number;
    curPageNum: number;
    visualSources: JSX.Element[];
}
const Visual = ({ numOfPages, curPageNum, visualSources }: IVisual) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => videoRef?.current?.load(), [curPageNum]);
    return (
        <>
            <Video autoPlay loop ref={videoRef}>
                {visualSources[curPageNum]}
            </Video>
            <PageButtons numOfPages={numOfPages} curPageNum={curPageNum} />
        </>
    )
}
interface IDataInput {
    numOfPages: number,
    visualSources: JSX.Element[],
    descriptionSources: string[]
}
class Data {
    numOfPages: number;
    visualSources: JSX.Element[];
    descriptionSources: string[];

    constructor({ numOfPages, visualSources, descriptionSources }: IDataInput) {
        this.numOfPages = numOfPages;
        this.visualSources = [...visualSources];
        this.descriptionSources = [...descriptionSources];
    }
    return(curPageNum: number): IDataReturn {
        return {
            Visual: <Visual numOfPages={this.numOfPages} curPageNum={curPageNum} visualSources={this.visualSources} />,
            description: this.descriptionSources[curPageNum],
            skills: [skills.UNITY, skills.VUFORIA]
        }
    }
};
const K21 = new Data({
    numOfPages: 3,
    visualSources: [
        <source src='/videos/projects/about/K21/K21_1.mp4' />,
        <source src='/videos/projects/about/K21/K21_2.mp4' />,
        <source src='/videos/projects/about/K21/K21_3.mp4' />
    ], descriptionSources: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Cras nibh purus, semper a congue egestas',
        'magna ac aliquet fringilla, arcu purus convallis risus, vel consequat massa lacus pulvinar sapien.'
    ]
});
const Suspension = new Data({
    numOfPages: 4,
    visualSources: [
        <source src='/videos/projects/about/Suspension/Suspension_1.mp4' />,
        <source src='/videos/projects/about/Suspension/Suspension_2.mp4' />,
        <source src='/videos/projects/about/Suspension/Suspension_3.mp4' />,
        <source src='/videos/projects/about/Suspension/Suspension_4.mp4' />,
    ], descriptionSources: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Cras nibh purus, semper a congue egestas',
        'magna ac aliquet fringilla, arcu purus convallis risus, vel consequat massa lacus pulvinar sapien.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ]
});
const Crane = new Data({
    numOfPages: 3,
    visualSources: [
        <source src='/videos/projects/about/Crane/Crane_1.mp4' />,
        <source src='/videos/projects/about/Crane/Crane_2.mp4' />,
        <source src='/videos/projects/about/Crane/Crane_3.mp4' />
    ], descriptionSources: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Cras nibh purus, semper a congue egestas',
        'magna ac aliquet fringilla, arcu purus convallis risus, vel consequat massa lacus pulvinar sapien.'
    ]
});
const Governor = new Data({
    numOfPages: 3,
    visualSources: [
        <source src='/videos/projects/about/Governor/Governor_1.mp4' />,
        <source src='/videos/projects/about/Governor/Governor_2.mp4' />,
        <source src='/videos/projects/about/Governor/Governor_3.mp4' />
    ], descriptionSources: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Cras nibh purus, semper a congue egestas',
        'magna ac aliquet fringilla, arcu purus convallis risus, vel consequat massa lacus pulvinar sapien.'
    ]
});
// Return parts
export const projects = (curPageNum = 0) => {
    return {
        K21: K21.return(curPageNum),
        Suspension: Suspension.return(curPageNum),
        Crane: Crane.return(curPageNum),
        Governor: Governor.return(curPageNum)
    }
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