import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "@components/Modal";
import ModeButtons, { ModeButton } from "@components/ModeButtons";
import ProjectDetail from "@sections/project/ProjectDetail";
import useApi from "../../utils/useApi";
import { ICategory, IProject, IResponse } from "src/types";
import ProjectItem from "./ProjectItem";
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > div{
        margin-bottom: 2em;
        width: 50%;
    }
`;
const ProjectList = styled.ul`
    width: 80%;
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(3, 20%);
    column-gap: 1em;
    row-gap: 1em;
`;
interface IProjects extends IResponse {
    projects: IProject[]
}
export default () => {
    const [getProjects, { data }] = useApi<IProjects, null>(`${process.env.REACT_APP_SERVER_URL}/projects`)
    const [category, setCategory] = useState<ICategory>('XR');
    const [projectID, setProjectID] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCategoryChange = (value: ICategory) => setCategory(value);
    const handleProjectClick = (id: string) => {
        setProjectID(id);
        setIsModalOpen(true);
    }
    const handleProjectModalClose = () => setIsModalOpen(false);
    useEffect(() => getProjects(), []);
    return (
        <Container>
            <ModeButtons>
                <ModeButton isactive={`${category === 'XR'}`} text='XR' kind='SectionMode' handleModeClick={() => handleCategoryChange('XR')} />
                <ModeButton isactive={`${category === 'WEB'}`} text='WEB' kind='SectionMode' handleModeClick={() => handleCategoryChange('WEB')} />
            </ModeButtons>
            <ProjectList>
                {data?.projects?.map(
                    project => project.category === category && (
                        <ProjectItem key={project._id} id={project._id} thumbnail={project.main_image} clickHandler={handleProjectClick} />
                    )
                )}
            </ProjectList>
            {isModalOpen && (
                <Modal handleClose={handleProjectModalClose}>
                    <ProjectDetail category={category} id={projectID} />
                </Modal>
            )}
        </Container>
    )
}