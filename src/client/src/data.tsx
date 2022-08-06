export const skills = {
    HTML: "html",
    CSS: "css",
    JS: "js",
    HTMLCSSJS: "htmlcssjs",
    PUG: "pug",
    SCSS: "scss",
    BOOTSTRAP: "bootstrap",
    REACT: "react",
    TYPESCRIPT: "typescript",
    REDUX: "redux",
    MONGODB: "mongodb",
    NODEJS: "nodejs",
    EXPRESS: "express",
    PASSPORT: "passport",
    WEBPACK: "webpack",
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

interface IProjectData {
    introduction?: string,
    pageNums: number,
    descriptions: string[],
    skills: string[],
    link?: string
}

const K21: IProjectData = {
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
};
const Suspension: IProjectData = {
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
};
const Crane: IProjectData = {
    introduction: 'This app is to provide construction workers with safety training on working with cranes.',
    pageNums: 3,
    descriptions: [
        `The app projects information onto the real world as virtual objects.`,
        `Users can decide whether to turn off showing the information panel in the case that they feel the need to keep it invisible for a moment.`,
        `Users can set the default language between Korean and Chinese, and the information will be provided with the language chosen.`
    ], skills: [skills.UNITY, skills.VUFORIA]
};
const Governor: IProjectData = {
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
};
const PinkiTalk2021: IProjectData = {
    pageNums: 5,
    descriptions: [
        `This is a Kakao-talk clone coding project, which is one of the dominating Korean messenger applications.
        As this is my first web project, only basic HTML and CSS were used.`,
        `This application only support portrait mode. So, rotate your screen in the way that switches the orientation of your device portrait mode.`,
        `Login with Email or phone number and password that meet some validation rules. When you click login button, it will direct you to the main page of the application.`,
        `Main page`,
        `Chats & Chatroom`
    ], skills: [skills.HTML, skills.CSS],
    link: "https://chaeri-yoon.github.io/pinki-talk-2021"
};
const ToDoList: IProjectData = {
    pageNums: 7,
    descriptions: [
        `This is a To Do List application, which you can add your daily tasks for a specific date on.`,
        `This application offers login function. Before using this application, you might want to create your own account.`,
        `When you are successfully logged in, you will be directed to homepage and your login status will be remembered by means of session.`,
        `After clicking a specific date when you want to add your task, write down your task and then push the enter button on your keyboard.`,
        `When your mouse is hovering on the task, buttons for editing and deleting will appear.`,
        `When you complete your task, you can tick a checkbox and then it will be automatically moved to the bottom. You can also uncheck a done task.`,
        `On My account tab, you can change your personal information. When you click change password button, the panel for changing password will appear.`
    ], skills: [skills.PUG, skills.SCSS, skills.JS, skills.NODEJS, skills.EXPRESS, skills.PASSPORT, skills.MONGODB, skills.WEBPACK],
    link: "https://chaeri-yoon-todolist.herokuapp.com"
};
const ToDoListReact: IProjectData = {
    pageNums: 7,
    descriptions: [
        `This is a To Do List application, which you can add your daily tasks with category.`,
        `This application offers login function. Before using this application, you might want to create your own account.`,
        `Main page`,
        `You can create your own task with the category. Choose one of the categories, which is Home, Work, School.`,
        `It will display the list of your tasks. When you navigate to another category, it will show you the list of tasks only in the selected category.`,
        `You can change the content and category of your tasks.`,
        `When you complete your task, you can tick a checkbox and then it will be automatically moved to the bottom. You can also uncheck a done task.`,
    ], skills: [skills.REACT, skills.REDUX, skills.JS, skills.NODEJS, skills.EXPRESS, skills.PASSPORT, skills.MONGODB],
    link: "https://chaeri-yoon-todolist-react.herokuapp.com/"
};
const Nomflix: IProjectData = {
    pageNums: 6,
    descriptions: [
        `This is an application showing the list of movies and tvs and detail of each entertaining content using themoviedb.org api`,
        `This application shows the list of movies that are now being played or scheduled to release or popular.
        If the 'TV' tab is clicked, it will show the list of tv shows that are top-rated or popular or due to be aired on that day.`,
        `When you click any media content on the list of contents, the application will be directed to the link showing the information on that content.`,
        `When 'Videos' tab is clicked, it will show you trailers for that content.`,
        `When 'Proudction' tab is clicked, it will show you the list of companies which have devoted to the production of that content.`,
        `On search tab, you can search contents by putting any keyword.`,
    ], skills: [skills.REACT, skills.TYPESCRIPT],
    link: "https://dazzling-swirles-d0e248.netlify.app/"
};
const CovidTracker: IProjectData = {
    pageNums: 3,
    descriptions: [
        `This is an application showing the number of cases of and deaths from COVID around the world and each country.`,
        `This application shows the number of total and today cases of and deaths from COVID. Each number will be counted up from 0 to the number automatically once the application has got the api response.
        The level of darkness is in proportion to the number of cases of each country.`,
        `When the mouse is hovering on a country on the map, it will show the popup window with the brief information of the country and its recorded cases of COVID.`,
    ], skills: [skills.REACT, skills.TYPESCRIPT, skills.BOOTSTRAP],
    link: "https://dazzling-swirles-d0e248.netlify.app/"
};
// Return data
export type ProjectCategory = 'XR' | 'WEB';
export type ProjectIDType = 'K21' | 'Suspension' | 'Crane' | 'Governor' | 'PinkiTalk2021' | 'ToDoList' | 'ToDoListReact' | 'Nomflix' | 'CovidTracker';
export const projects = {
    K21: 'K21',
    SUSPENSION: 'Suspension',
    CRANE: 'Crane',
    GOVERNOR: 'Governor',
    PINKITALK2021: 'PinkiTalk2021',
    ToDoList: 'ToDoList',
    ToDoListReact: 'ToDoListReact',
    Nomflix: 'Nomflix',
    CovidTracker: 'CovidTracker'
}
export const projectsDetail = { K21, Suspension, Crane, Governor, PinkiTalk2021, ToDoList, ToDoListReact, Nomflix, CovidTracker };