import React, { useState } from "react";
import styled from "styled-components";
import Modal from "@components/Modal";
import ModeButtons, { ModeButton } from "@components/ModeButtons";
import ProjectDetail from "@sections/project/ProjectDetail";
import Web from "@sections/project/Web";
import XR from "@sections/project/XR";
import { ProjectIDType } from "@data";
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
export type ProjectCategory = 'XR' | 'WEB';
export default () => {
    const [category, setCategory] = useState<ProjectCategory>('XR');
    const [projectID, setProjectID] = useState<ProjectIDType>('K21');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCategoryChange = (value: ProjectCategory) => setCategory(value);
    const handleProjectClick = (event: React.MouseEvent<HTMLElement>) => {
        const { id } = event.target as HTMLElement;
        if (!id) return;
        setProjectID(id as ProjectIDType);
        setIsModalOpen(true);
    }
    const handleProjectModalClose = () => setIsModalOpen(false);
    return (
        <Container>
            <ModeButtons>
                <ModeButton isactive={`${category === 'XR'}`} text='XR' kind='SectionMode' handleModeClick={() => handleCategoryChange('XR')} />
                <ModeButton isactive={`${category === 'WEB'}`} text='WEB' kind='SectionMode' handleModeClick={() => handleCategoryChange('WEB')} />
            </ModeButtons>
            <ProjectList onClick={handleProjectClick}>
                {category === 'XR' ? <XR /> : <Web />}
            </ProjectList>
            {isModalOpen && (
                <Modal handleClose={handleProjectModalClose}>
                    <ProjectDetail projectCategory={category} projectID={projectID} />
                </Modal>
            )}
        </Container>
    )
}