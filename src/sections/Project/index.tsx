import { useState } from "react";
import styled from "styled-components";
import ModeButtons, { ModeButton } from "../../components/ModeButtons";
import Web from "./Web";
import Xr from "./Xr";
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
    & > li{
        width: 100%;
        aspect-ratio: 1 / 1;
    }
`;

export default () => {
    const [mode, setMode] = useState<'XR' | 'WEB'>('XR');
    const handleModeClick = (value: 'XR' | 'WEB') => setMode(value);
    return (
        <Container>
            <ModeButtons>
                <ModeButton isactive={`${mode === 'XR'}`} text='XR' handleModeClick={() => handleModeClick('XR')} />
                <ModeButton isactive={`${mode === 'WEB'}`} text='WEB' handleModeClick={() => handleModeClick('WEB')} />
            </ModeButtons>
            <ProjectList>
                {mode === 'XR' ? <Xr /> : <Web />}
            </ProjectList>
        </Container>
    )
}