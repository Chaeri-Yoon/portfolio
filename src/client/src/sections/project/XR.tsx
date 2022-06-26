import { projects } from "@data";
import ProjectItem from "@sections/project/ProjectItem";

export default () => {
    return (
        <>
            <ProjectItem thumbnail={`/images/projects/XR/${projects.K21}.png`} projectID={projects.K21}></ProjectItem>
            <ProjectItem thumbnail={`/images/projects/XR/${projects.SUSPENSION}.png`} projectID={projects.SUSPENSION}></ProjectItem>
            <ProjectItem thumbnail={`/images/projects/XR/${projects.CRANE}.png`} projectID={projects.CRANE}></ProjectItem>
            <ProjectItem thumbnail={`/images/projects/XR/${projects.GOVERNOR}.png`} projectID={projects.GOVERNOR}></ProjectItem>
        </>
    )
}