import styled from "styled-components";

const ModeButtons = styled.div`
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled.button<{ isactive: string }>`
    width: 50%;
    text-align: center;
    background-color: transparent;
    & > span{
        border-bottom: ${({ isactive }) => isactive === 'true' ? '2px solid pink' : 'none'};
    }
`;
export default ({ children }: any) => {
    return (
        <ModeButtons>
            {children}
        </ModeButtons>
    )
}
export const ModeButton = ({ isactive, text, handleModeClick }: { isactive: string, text: string, handleModeClick: () => void }) => {
    return (
        <Button isactive={isactive} onClick={handleModeClick}><span className="underlined">{text}</span></Button>
    )
}