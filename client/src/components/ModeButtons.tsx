import styled from "styled-components";

const ModeButtons = styled.div`
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled.button<{ isactive: string, kind?: string }>`
    text-align: center;
    background-color: transparent;
    font-size: 1em;
    
    & > span{
        border-bottom: ${({ isactive }) => isactive === 'true' ? '2px solid pink' : 'none'};
    }
`;
const ProjectTabButton = styled(Button)`
    margin-bottom: 0.5em;
    font-size: 0.8em;
    & > span{
        border-bottom-color: #f97087;
        color: white;
    }
`;
const SectionModeButton = styled(Button)`
    margin-bottom:  0;
    width: 50%;
    & > span{
        border-bottom-color: pink;
        color: black;
    }
`;
export default ({ children }: any) => {
    return (
        <ModeButtons>
            {children}
        </ModeButtons>
    )
}
export const ModeButton = ({ isactive, text, handleModeClick, kind }: { isactive: string, text: string, handleModeClick: () => void, kind: 'ProjectDetail' | 'SectionMode' }) => {
    return (
        <>
            {kind === 'ProjectDetail' && <ProjectTabButton isactive={isactive} onClick={handleModeClick} kind={kind}><span className="underlined">{text}</span></ProjectTabButton>}
            {kind === 'SectionMode' && <SectionModeButton isactive={isactive} onClick={handleModeClick} kind={kind}><span className="underlined">{text}</span></SectionModeButton>}
        </>
    )
}