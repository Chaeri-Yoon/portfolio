import styled from "styled-components"

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
const SkillsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 10%);
    column-gap: 1em;
    list-style-type: none;
`;
const Skill = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    & > img{
        border: 1px solid rgba(0, 0, 0, .3);
        border-radius: 50%;
        width: 100%;
        aspect-ratio: 1 / 1;
    }
`;
export default () => {
    return (
        <Container>
            <Skills>
                <Title>Top Skills</Title>
                <SkillsList>
                    <Skill><img src="/images/htmlcssjs.png" /></Skill>
                    <Skill><img src="/images/nodejs.png" /></Skill>
                    <Skill><img src="/images/unity.png" /></Skill>
                </SkillsList>
            </Skills>
            <Skills>
                <Title>Experience</Title>
                <SkillsList>
                    <Skill><img src="/images/htmlcssjs.png" /></Skill>
                    <Skill><img src="/images/nodejs.png" /></Skill>
                    <Skill><img src="/images/unity.png" /></Skill>
                </SkillsList>
            </Skills>
        </Container>
    )
}