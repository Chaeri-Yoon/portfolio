import styled from "styled-components";
import { ItemsList, Skill } from "@components/SkillsList";
import { ProjectIDType, projectsDetail } from "@data";
import '@styles/variables.css'

const Container = styled.div`
    width: 100%;
    padding: calc(var(--body-padding) / 2);
`;
const SkillsContainer = styled(ItemsList)`
    grid-template-columns: repeat(auto-fill, 20%);
`;
export default ({ projectID }: { projectID: ProjectIDType }) => {
    return (
        <Container>
            <SkillsContainer>
                {projectsDetail()[projectID].skills.map((skill, i) => (
                    <Skill key={i} skillname={skill} />
                ))}
            </SkillsContainer>
        </Container>
    )
}