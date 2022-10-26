import { useState } from "react";
import styled from "styled-components"
import { ModeButton } from "@components/ModeButtons";
import ProjectSkills from "@sections/project/ProjectDetail/ProjectSkills";
import ProjectDetailItem from "./ProjectDetailItem";
import { ProjectIDType } from "@data";
import { ProjectCategory } from "@data";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const TabArea = styled.div`
    padding: 1em;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: pink;
    border-left: 0.5px solid rgba(255, 192, 203, .2);
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
`;
const Content = styled.div`
    flex: 1;
    padding: 0.5em 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
export type TabType = 'INTRO' | 'ABOUT' | 'SKILLS';
export default ({ projectCategory, projectID }: { projectCategory: ProjectCategory, projectID: ProjectIDType }) => {
    const [tab, setTab] = useState<TabType>(projectCategory === 'XR' ? 'INTRO' : 'ABOUT');
    const handleTabClick = (value: TabType) => setTab(value);
    return (
        <Container>
            <TabArea>
                {projectCategory === 'XR' && <ModeButton isactive={`${tab === 'INTRO'}`} text='INTRO' kind='ProjectDetail' handleModeClick={() => handleTabClick('INTRO')} />}
                <ModeButton isactive={`${tab === 'ABOUT'}`} text='ABOUT' kind='ProjectDetail' handleModeClick={() => handleTabClick('ABOUT')} />
                <ModeButton isactive={`${tab === 'SKILLS'}`} text='SKILLS' kind='ProjectDetail' handleModeClick={() => handleTabClick('SKILLS')} />
            </TabArea>
            <Content>
                {tab === 'INTRO' && (
                    <ProjectDetailItem mode="INTRO" projectID={projectID} />
                )}
                {tab === 'ABOUT' && (
                    <ProjectDetailItem mode="ABOUT" projectCategory={projectCategory} projectID={projectID} />
                )}
                {tab === 'SKILLS' && (
                    <ProjectSkills projectID={projectID} />
                )}
            </Content>
        </Container>
    )
}