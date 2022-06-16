import { useState } from "react";
import styled from "styled-components"
import { ModeButton } from "../../../components/ModeButtons";
import '../../../styles/variables.css';
import About from "./About";
import Skills from "./ProjectSkills";

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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
const VideoContainer = styled.video`
    margin: 7% 0;
    width: 70%;
    aspect-ratio: 4 / 3;
    background-color: black;
`;
const VideoSource = styled.source`
    width: 100%;
    height: 100%;
`;
type TabType = 'VIDEO' | 'ABOUT' | 'SKILLS';
export default ({ projectId }: { projectId: string }) => {
    const [tab, setTab] = useState<TabType>('VIDEO');
    const handleTabClick = (value: TabType) => setTab(value);
    return (
        <Container>
            <TabArea>
                <ModeButton isactive={`${tab === 'VIDEO'}`} text='VIDEO' kind='ProjectDetail' handleModeClick={() => handleTabClick('VIDEO')} />
                <ModeButton isactive={`${tab === 'ABOUT'}`} text='ABOUT' kind='ProjectDetail' handleModeClick={() => handleTabClick('ABOUT')} />
                <ModeButton isactive={`${tab === 'SKILLS'}`} text='SKILLS' kind='ProjectDetail' handleModeClick={() => handleTabClick('SKILLS')} />
            </TabArea>
            <Content>
                {tab === 'VIDEO' && (
                    <VideoContainer controls>
                        <VideoSource src={`/videos/projects/${projectId}.mp4`} />
                    </VideoContainer>
                )}
                {tab === 'ABOUT' && (
                    <About projectId={projectId} />
                )}
                {tab === 'SKILLS' && (
                    <Skills projectId={projectId} />
                )}
            </Content>
        </Container>
    )
}