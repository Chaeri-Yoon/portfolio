import { projects } from "@data";
import ProjectItem from "@sections/project/ProjectItem";

export default () => {
    return (
        <>
            <ProjectItem thumbnail={`/projects/Web/${projects.PINKITALK2021}.png`} projectName={projects.PINKITALK2021}></ProjectItem>
            <ProjectItem thumbnail='' projectName={''}></ProjectItem>
            <ProjectItem thumbnail='' projectName={''}></ProjectItem>
            <ProjectItem thumbnail='' projectName={''}></ProjectItem>
            <ProjectItem thumbnail='' projectName={''}></ProjectItem>
            <ProjectItem thumbnail='' projectName={''}></ProjectItem>
        </>
    )
}