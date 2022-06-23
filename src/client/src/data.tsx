import { ReactElement, useEffect, useRef } from "react";
import PageButtons from "@sections/project/ProjectDetail/About/PageButtons";

// Project Data
interface IDataReturn {
    introduction: string;
    Video: ReactElement;
    description: string;
    skills: string[];
}
interface IVideo {
    numOfPages: number;
    curPageNum: number;
    visualSources: JSX.Element[];
}
const Video = ({ numOfPages, curPageNum, visualSources }: IVideo) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => videoRef?.current?.load(), [curPageNum]);
    return (
        <>
            <video autoPlay loop ref={videoRef}>
                {visualSources[curPageNum]}
            </video>
            <PageButtons numOfPages={numOfPages} curPageNum={curPageNum} />
        </>
    )
}
interface IDataInput {
    introduction?: string,
    numOfPages?: number,
    visualSources?: JSX.Element[],
    descriptionSources?: string[]
}
class Data {
    introduction: string;
    numOfPages: number;
    visualSources: JSX.Element[];
    descriptionSources: string[];

    constructor({ introduction = '', numOfPages = 1, visualSources = [], descriptionSources = [] }: IDataInput) {
        this.introduction = introduction;
        this.numOfPages = numOfPages;
        this.visualSources = [...visualSources];
        this.descriptionSources = [...descriptionSources];
    }
    return(curPageNum: number): IDataReturn {
        return {
            introduction: this.introduction,
            Video: <Video numOfPages={this.numOfPages} curPageNum={curPageNum} visualSources={this.visualSources} />,
            description: this.descriptionSources[curPageNum],
            skills: [skills.UNITY, skills.VUFORIA]
        }
    }
};
const K21 = new Data({
    introduction: 'This app is to provide army mechanics with training on how to fix and maintain K21, a South Korean infantry fighting vehicle.',
    numOfPages: 4,
    visualSources: [
        <source src='/videos/projects/about/K21/K21_1.mp4' />,
        <source src='/videos/projects/about/K21/K21_2.mp4' />,
        <source src='/videos/projects/about/K21/K21_3.mp4' />,
        <source src='/videos/projects/about/K21/K21_4.mp4' />
    ], descriptionSources: [
        `The app recognizes the K21 product with Vuforia and renders its 3D virtual model in a way that makes it layered onto the actual model on camera.
        Users can decide whether to turn off showing this virtual model, except for the components related to the step going on, in the case that this virtual object blocks users' sight.`,
        `The app projects information on how to complete the current procedure, such as plans and instruction manuals, around the position where the virtual model is created.
        It also shows users the animation that shows how the procedure should be done. 
        Through animation function, As the virtual model is layered onto the actual object from the users' view, users can get a good grasp of which components are involved and what jobs should be done to them in the current step.`,
        `The design plan allows users to adjust the focus on the specific part of it that they want to see through a drag gesture.`,
        `The information objects will tilt themselves in real-time so that they can face users.`
    ]
});
const Suspension = new Data({
    introduction: 'This app is to provide army mechanics with training on how to fix and maintain suspension units assembled on K21, a South Korean infantry fighting vehicle.',
    numOfPages: 4,
    visualSources: [
        <source src='/videos/projects/about/Suspension/Suspension_1.mp4' />,
        <source src='/videos/projects/about/Suspension/Suspension_2.mp4' />,
        <source src='/videos/projects/about/Suspension/Suspension_3.mp4' />,
        <source src='/videos/projects/about/Suspension/Suspension_4.mp4' />,
    ], descriptionSources: [
        `The app recognizes the suspension assembled on K21 with Vuforia and renders its 3D virtual model in a way that makes it layered onto the actual model on camera.
        Users can decide whether to turn off showing this virtual model, except for the components related to the step going on, in the case that this virtual object blocks users' sight.`,
        `The app projects information on how to complete the current procedure, such as plans and instruction manuals, around the position where the virtual model is created.
        It also shows users the animation that shows how the procedure should be done. 
        Through animation function, As the virtual model is layered onto the actual object from the users' view, users can get a good grasp of which components are involved and what jobs should be done to them in the current step.`,
        `The app offers the 3D design plan, which allows users to see either an assembled or disassembled model and provides the function to show the information on each component upon clicked.`,
        `The information objects will tilt themselves in real-time so that they can face users.`
    ]
});
const Crane = new Data({
    introduction: 'This app is to provide construction workers with safety training on working with cranes.',
    numOfPages: 3,
    visualSources: [
        <source src='/videos/projects/about/Crane/Crane_1.mp4' />,
        <source src='/videos/projects/about/Crane/Crane_2.mp4' />,
        <source src='/videos/projects/about/Crane/Crane_3.mp4' />
    ], descriptionSources: [
        `The app projects information onto the real world as virtual objects.`,
        `Users can decide whether to turn off showing the information panel in the case that they feel the need to keep it invisible for a moment.`,
        `Users can set the default language between Korean and Chinese, and the information will be provided with the language chosen.`
    ]
});
const Governor = new Data({
    introduction: 'This app is to provide mechanics responsible for maintaining gas governors with maintenance training.',
    numOfPages: 3,
    visualSources: [
        <source src='/videos/projects/about/Governor/Governor_1.mp4' />,
        <source src='/videos/projects/about/Governor/Governor_2.mp4' />,
        <source src='/videos/projects/about/Governor/Governor_3.mp4' />
    ], descriptionSources: [
        `The app recognizes the gas governor with Vuforia and renders its 3D virtual model in a way that makes it layered onto the actual model on camera.
        Users can decide whether to turn off showing this virtual model, except for the components related to the step going on, in the case that this virtual object blocks users' sight.`,
        `The app projects information on how to complete the current procedure around the position where the virtual model is created. It also shows users the animation that shows how the procedure should be done. 
        Through animation function, As the virtual model is layered onto the actual object from the users' view, users can get a good grasp of which components are involved and what jobs should be done to them in the current step.`,
        `The app provides information on each assembly unit that composes the gas governor. This information includes the data on each component put together in the assembly unit and the animation of the whole step on how to assemble or disassemble the unit.
        Users can also adjust the size of each unit, make it either bigger or smaller, and rotate it by means of a remote controller.`
    ]
});
// Return parts
export type ProjectIDType = 'K21' | 'Suspension' | 'Crane' | 'Governor';
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