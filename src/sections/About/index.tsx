import { useState } from "react";
import styled from "styled-components";
import ModeButtons, { ModeButton } from "../../components/ModeButtons";
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
    & > div{
        width: 100%;
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
                    <ModeButton isactive={`${mode === 'ABOUT'}`} text='ABOUT' handleModeClick={() => handleModeClick('ABOUT')} />
                    <ModeButton isactive={`${mode === 'SKILLS'}`} text='SKILLS' handleModeClick={() => handleModeClick('SKILLS')} />
                </ModeButtons>
                {mode === 'ABOUT' ? <AboutInfo /> : <Skills />}
            </Content>
        </Container>
    )
}