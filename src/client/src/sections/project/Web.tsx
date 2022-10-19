import { projects } from "@data";
import ProjectItem from "@sections/project/ProjectItem";

export default () => {
    return (
        <>
            <ProjectItem thumbnail={`/images/projects/Web/${projects.PINKITALK2021}.png`} projectID={projects.PINKITALK2021}></ProjectItem>
            <ProjectItem thumbnail={`/images/projects/Web/${projects.ToDoList}.jpg`} projectID={projects.ToDoList}></ProjectItem>
            <ProjectItem thumbnail={`/images/projects/Web/${projects.ToDoListReact}.jpg`} projectID={projects.ToDoListReact}></ProjectItem>
            <ProjectItem thumbnail={`/images/projects/Web/${projects.Nomflix}.jpg`} projectID={projects.Nomflix}></ProjectItem>
            <ProjectItem thumbnail={`/images/projects/Web/${projects.CovidTracker}.jpg`} projectID={projects.CovidTracker}></ProjectItem>
            <ProjectItem thumbnail={`/images/projects/Web/${projects.YoutubeClone}.jpg`} projectID={projects.YoutubeClone}></ProjectItem>
            <ProjectItem thumbnail={`/images/projects/Web/${projects.ChatApp}.jpg`} projectID={projects.ChatApp}></ProjectItem>
        </>
    )
}