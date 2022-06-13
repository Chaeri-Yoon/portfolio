import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../components/Modal";
import ModeButtons, { ModeButton } from "../../components/ModeButtons";
import ProjectDetail from "./ProjectDetail";
import Web from "./Web";
import XR from "./XR";
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

export default () => {
    const [mode, setMode] = useState<'XR' | 'WEB'>('XR');
    const [projectNum, setProjectNum] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModeClick = (value: 'XR' | 'WEB') => setMode(value);
    const handleProjectClick = (event: React.MouseEvent<HTMLElement>) => {
        const { id } = event.target as HTMLElement;
        setProjectNum(id.split('/')[1]);
        setIsModalOpen(true);
    }
    const handleProjectModalClose = () => setIsModalOpen(false);
    return (
        <Container>
            <ModeButtons>
                <ModeButton isactive={`${mode === 'XR'}`} text='XR' kind='SectionMode' handleModeClick={() => handleModeClick('XR')} />
                <ModeButton isactive={`${mode === 'WEB'}`} text='WEB' kind='SectionMode' handleModeClick={() => handleModeClick('WEB')} />
            </ModeButtons>
            <ProjectList onClick={handleProjectClick}>
                {mode === 'XR' ? <XR /> : <Web />}
            </ProjectList>
            {isModalOpen && (
                <Modal handleClose={handleProjectModalClose}>
                    <ProjectDetail category={mode} projectNum={projectNum} />
                </Modal>
            )}
        </Container>
    )
}