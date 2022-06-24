import { projects } from "@data";
import ProjectItem from "@sections/project/ProjectItem";

export default () => {
    return (
        <>
            <ProjectItem thumbnail={`/projects/XR/${projects.K21}.png`} projectName={projects.K21}></ProjectItem>
            <ProjectItem thumbnail={`/projects/XR/${projects.SUSPENSION}.png`} projectName={projects.SUSPENSION}></ProjectItem>
            <ProjectItem thumbnail={`/projects/XR/${projects.CRANE}.png`} projectName={projects.CRANE}></ProjectItem>
            <ProjectItem thumbnail={`/projects/XR/${projects.GOVERNOR}.png`} projectName={projects.GOVERNOR}></ProjectItem>
        </>
    )
}