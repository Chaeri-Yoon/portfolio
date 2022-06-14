import styled from "styled-components";
import data from "./data";

const AboutContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const AboutVisual = styled.div`
    width: 100%;
    aspect-ratio: 4 / 3;
    & > video{
        width: 100%;
        height: 100%;
    }
`;
const AboutDescription = styled.div`
    width: 100%;
    aspect-ratio: 4 / 1.5;
    overflow-y: scroll;
`;
export default ({ projectId }: { projectId: string }) => {
    return (
        <AboutContainer>
            <AboutVisual>
                {projectId === 'k21' && data.k21.visual}
            </AboutVisual>
            <AboutDescription>
                <span>{projectId === 'k21' && data.k21.description}</span>
            </AboutDescription>
        </AboutContainer>
    )
}