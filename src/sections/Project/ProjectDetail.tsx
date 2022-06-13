import { useState } from "react";
import styled from "styled-components"
import ModeButtons, { ModeButton } from "../../components/ModeButtons";
import '../../styles/variables.css';

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
`;
const Content = styled.div`
    height: 100%;
`;
type tabTypes = 'VIDEO' | 'ABOUT' | 'SKILLS';
export default ({ category, projectNum }: { category: string, projectNum: string }) => {
    const [tab, setTab] = useState<tabTypes>('VIDEO');
    const handleTabClick = (value: tabTypes) => setTab(value);
    return (
        <Container>
            <TabArea>
                <ModeButton isactive={`${tab === 'VIDEO'}`} text='VIDEO' kind='ProjectDetail' handleModeClick={() => handleTabClick('VIDEO')} />
                <ModeButton isactive={`${tab === 'ABOUT'}`} text='ABOUT' kind='ProjectDetail' handleModeClick={() => handleTabClick('ABOUT')} />
                <ModeButton isactive={`${tab === 'SKILLS'}`} text='SKILLS' kind='ProjectDetail' handleModeClick={() => handleTabClick('SKILLS')} />
            </TabArea>
            <Content />
        </Container>
    )
}