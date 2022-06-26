export const skills = {
    HTML: "html",
    CSS: "css",
    JS: "js",
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
    }
}
// Project Data
interface IDataReturn {
    pageNums: number;
    introduction?: string;
    description: string;
    skills: string[];
}

interface IDataInput {
    introduction?: string,
    pageNums?: number,
    descriptions?: string[]
    skills: string[]
}
class Data {
    introduction?: string;
    pageNums: number;
    descriptions: string[];
    skills: string[];

    constructor({ introduction = '', pageNums = 1, descriptions = [], skills = [] }: IDataInput) {
        this.introduction = introduction;
        this.pageNums = pageNums;
        this.descriptions = [...descriptions];
        this.skills = [...skills];
    }
    return(curPageNum: number): IDataReturn {
        return {
            pageNums: this.pageNums,
            introduction: this.introduction,
            description: this.descriptions[curPageNum],
            skills: this.skills
        }
    }
};
const K21 = new Data({
    introduction: 'This app is to provide army mechanics with training on how to fix and maintain K21, a South Korean infantry fighting vehicle.',
    pageNums: 4,
    descriptions: [
        `The app recognizes the K21 product with Vuforia and renders its 3D virtual model in a way that makes it layered onto the actual model on camera.
        Users can decide whether to turn off showing this virtual model, except for the components related to the step going on, in the case that this virtual object blocks users' sight.`,
        `The app projects information on how to complete the current procedure, such as plans and instruction manuals, around the position where the virtual model is created.
        It also shows users the animation that shows how the procedure should be done. 
        Through animation function, As the virtual model is layered onto the actual object from the users' view, users can get a good grasp of which components are involved and what jobs should be done to them in the current step.`,
        `The design plan allows users to adjust the focus on the specific part of it that they want to see through a drag gesture.`,
        `The information objects will tilt themselves in real-time so that they can face users.`
    ], skills: [skills.UNITY, skills.VUFORIA]
});
const Suspension = new Data({
    introduction: 'This app is to provide army mechanics with training on how to fix and maintain suspension units assembled on K21, a South Korean infantry fighting vehicle.',
    pageNums: 4,
    descriptions: [
        `The app recognizes the suspension assembled on K21 with Vuforia and renders its 3D virtual model in a way that makes it layered onto the actual model on camera.
        Users can decide whether to turn off showing this virtual model, except for the components related to the step going on, in the case that this virtual object blocks users' sight.`,
        `The app projects information on how to complete the current procedure, such as plans and instruction manuals, around the position where the virtual model is created.
        It also shows users the animation that shows how the procedure should be done. 
        Through animation function, As the virtual model is layered onto the actual object from the users' view, users can get a good grasp of which components are involved and what jobs should be done to them in the current step.`,
        `The app offers the 3D design plan, which allows users to see either an assembled or disassembled model and provides the function to show the information on each component upon clicked.`,
        `The information objects will tilt themselves in real-time so that they can face users.`
    ], skills: [skills.UNITY, skills.VUFORIA]
});
const Crane = new Data({
    introduction: 'This app is to provide construction workers with safety training on working with cranes.',
    pageNums: 3,
    descriptions: [
        `The app projects information onto the real world as virtual objects.`,
        `Users can decide whether to turn off showing the information panel in the case that they feel the need to keep it invisible for a moment.`,
        `Users can set the default language between Korean and Chinese, and the information will be provided with the language chosen.`
    ], skills: [skills.UNITY, skills.VUFORIA]
});
const Governor = new Data({
    introduction: 'This app is to provide mechanics responsible for maintaining gas governors with maintenance training.',
    pageNums: 3,
    descriptions: [
        `The app recognizes the gas governor with Vuforia and renders its 3D virtual model in a way that makes it layered onto the actual model on camera.
        Users can decide whether to turn off showing this virtual model, except for the components related to the step going on, in the case that this virtual object blocks users' sight.`,
        `The app projects information on how to complete the current procedure around the position where the virtual model is created. It also shows users the animation that shows how the procedure should be done. 
        Through animation function, As the virtual model is layered onto the actual object from the users' view, users can get a good grasp of which components are involved and what jobs should be done to them in the current step.`,
        `The app provides information on each assembly unit that composes the gas governor. This information includes the data on each component put together in the assembly unit and the animation of the whole step on how to assemble or disassemble the unit.
        Users can also adjust the size of each unit, make it either bigger or smaller, and rotate it by means of a remote controller.`
    ], skills: [skills.UNITY, skills.VUFORIA]
});
const PinkiTalk2021 = new Data({
    pageNums: 5,
    descriptions: [
        `This is a Kakao-talk clone coding project, which is one of the dominating Korean messenger applications.
        As this is my first web project, only basic HTML and CSS were used.`,
        `This application only support portrait mode. So, rotate your screen in the way that switches the orientation of your device portrait mode.`,
        `Login with Email or phone number and password that meet some validation rules. When you click login button, it will direct you to the main page of the application.`,
        `Main page`,
        `Chats & Chatroom`
    ], skills: [skills.HTML, skills.CSS]
})
// Return data
export type ProjectCategory = 'XR' | 'WEB';
export type ProjectIDType = 'K21' | 'Suspension' | 'Crane' | 'Governor' | 'PinkiTalk2021';
export const projects = {
    K21: 'K21',
    SUSPENSION: 'Suspension',
    CRANE: 'Crane',
    GOVERNOR: 'Governor',
    PINKITALK2021: 'PinkiTalk2021'
}
export const projectsDetail = (curPageNum = 0) => {
    return {
        K21: K21.return(curPageNum),
        Suspension: Suspension.return(curPageNum),
        Crane: Crane.return(curPageNum),
        Governor: Governor.return(curPageNum),
        PinkiTalk2021: PinkiTalk2021.return(curPageNum)
    }
}