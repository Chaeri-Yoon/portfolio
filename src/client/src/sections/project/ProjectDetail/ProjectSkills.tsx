import styled from "styled-components";
import { ItemsList, Skill } from "@components/SkillsList";
import { projects } from "@data";
import '@styles/variables.css'

const Container = styled.div`
    padding: calc(var(--body-padding) / 2);
`;
const SkillsContainer = styled(ItemsList)`
    grid-template-columns: repeat(auto-fill, 20%);
`;
export default ({ projectId }: { projectId: string }) => {
    return (
        <Container>
            <SkillsContainer>
                {projectId === 'K21' && projects().K21.skills.map((skill, i) => (
                    <Skill key={i} skillname={skill} />
                ))}
                {projectId === 'Suspension' && projects().Suspension.skills.map((skill, i) => (
                    <Skill key={i} skillname={skill} />
                ))}
                {projectId === 'Crane' && projects().Crane.skills.map((skill, i) => (
                    <Skill key={i} skillname={skill} />
                ))}
                {projectId === 'Governor' && projects().Governor.skills.map((skill, i) => (
                    <Skill key={i} skillname={skill} />
                ))}
            </SkillsContainer>
        </Container>
    )
}