import { useEffect } from "react";
import styled from "styled-components"
import SkillsList, { Skill } from "@components/SkillsList";
// Tried to use craco-alias, but it seems to have some issue. Will be figured out.
// import useApi from "@utils";
import useApi from '../../utils/useApi';
import { IResponse, ISkill } from "src/types";

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
interface ISkills extends IResponse {
    skills: ISkill[]
}
export default () => {
    const [getSkills, { data }] = useApi<ISkills, null>(`${process.env.REACT_APP_SERVER_URL}/skills`)
    useEffect(() => getSkills(), []);
    return (
        <Container>
            <Skills>
                <SkillsList>
                    {data?.skills?.map((skill, i) => <Skill key={i} skillname={skill.name} image={skill.image} />)}
                </SkillsList>
            </Skills>
        </Container>
    )
}