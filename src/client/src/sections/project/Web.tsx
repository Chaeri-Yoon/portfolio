import { projects } from "@data";
import ProjectItem from "@sections/project/ProjectItem";

export default () => {
    return (
        <>
            <ProjectItem thumbnail={`/images/projects/Web/${projects.PINKITALK2021}.png`} projectID={projects.PINKITALK2021}></ProjectItem>
            <ProjectItem thumbnail='' projectID={''}></ProjectItem>
            <ProjectItem thumbnail='' projectID={''}></ProjectItem>
            <ProjectItem thumbnail='' projectID={''}></ProjectItem>
            <ProjectItem thumbnail='' projectID={''}></ProjectItem>
            <ProjectItem thumbnail='' projectID={''}></ProjectItem>
        </>
    )
}