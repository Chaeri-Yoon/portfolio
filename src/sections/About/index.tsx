import { useState } from "react";
import styled from "styled-components";
import '../../styles/variables.css';
import AboutInfo from "./AboutInfo";
import Skills from "./Skills";

const Container = styled.div`
    width: 100%;
    aspect-ratio: 15 / 4;
    padding: 0 var(--body-padding);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
const ProfileImage = styled.div`
    height: 100%;
    aspect-ratio: 3/ 4;
    background-color: pink;
`;
const Content = styled.div`
    padding: 0 2em;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
const ModeButtons = styled.div`
    margin-bottom: 1em;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ModeButton = styled.button<{ isactive: string }>`
    width: 50%;
    text-align: center;
    background-color: transparent;
    & > span{
        border-bottom: ${({ isactive }) => isactive === 'true' ? '2px solid pink' : 'none'};
    }
`;

export default () => {
    const [mode, setMode] = useState<'ABOUT' | 'SKILLS'>('ABOUT');
    const handleModeClick = (value: 'ABOUT' | 'SKILLS') => setMode(value);
    return (
        <Container>
            <ProfileImage />
            <Content>
                <ModeButtons>
                    <ModeButton isactive={`${mode === 'ABOUT'}`} onClick={() => handleModeClick('ABOUT')}><span className="underlined">ABOUT</span></ModeButton>
                    <ModeButton isactive={`${mode === 'SKILLS'}`} onClick={() => handleModeClick('SKILLS')}><span className="underlined">SKILLS</span></ModeButton>
                </ModeButtons>
                {mode === 'ABOUT' ? <AboutInfo /> : <Skills />}
            </Content>
        </Container>
    )
}