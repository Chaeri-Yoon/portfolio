import styled from "styled-components"
import SkillsList, { Skill } from "../../components/SkillsList";
import { skills } from "../../data";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const Skills = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const Title = styled.span`
    padding: 0.4em 0;
    font-size: 1.3em;
    font-weight: bold;
`;
export default () => {
    return (
        <Container>
            <Skills>
                <Title>Top Skills</Title>
                <SkillsList>
                    {skills.topList.map((skill, i) => <Skill key={i} skillname={skill} />)}
                </SkillsList>
            </Skills>
            <Skills>
                <Title>Experience</Title>
                <SkillsList>
                    {skills.experienceList.map((skill, i) => <Skill key={i} skillname={skill} />)}
                </SkillsList>
            </Skills>
        </Container>
    )
}