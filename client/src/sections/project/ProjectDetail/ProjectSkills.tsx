import styled from "styled-components";
import { ItemsList, Skill } from "@components/SkillsList";
import { ISkill } from '../../../types';
import '@styles/variables.css'

const Container = styled.div`
    width: 100%;
    padding: calc(var(--body-padding) / 2);
`;
const SkillsContainer = styled(ItemsList)`
    grid-template-columns: repeat(auto-fill, 15%);
`;
export default ({ skills }: { skills: ISkill[] }) => {
    return (
        <Container>
            <SkillsContainer>
                {skills?.map((skill, i) => (
                    <Skill key={i} name={skill.name} image={skill.image} />
                ))}
            </SkillsContainer>
        </Container>
    )
}