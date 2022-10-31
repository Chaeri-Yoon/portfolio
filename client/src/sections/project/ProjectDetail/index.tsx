import { useEffect, useState } from "react";
import styled from "styled-components"
import { ModeButton } from "@components/ModeButtons";
import ProjectSkills from "@sections/project/ProjectDetail/ProjectSkills";
import ProjectDetailItem from "./ProjectDetailItem";
import { ICategory, IProject, IResponse } from "src/types";
import useApi from "../../../utils/useApi";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const TabArea = styled.div`
    padding: 1em;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: pink;
    border-left: 0.5px solid rgba(255, 192, 203, .2);
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
`;
const Content = styled.div`
    flex: 1;
    padding: 0.5em 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
interface IProjectData extends IResponse {
    project: IProject
}
export type TabType = 'INTRO' | 'ABOUT' | 'SKILLS';
export default ({ category, id }: { category: ICategory, id: string }) => {
    const [getProject, { data }] = useApi<IProjectData, null>(`${process.env.REACT_APP_SERVER_URL}/project/${id}`)
    const [tab, setTab] = useState<TabType>(category === 'XR' ? 'INTRO' : 'ABOUT');
    const handleTabClick = (value: TabType) => setTab(value);
    useEffect(() => getProject(), []);
    return (
        <Container>
            <TabArea>
                {category === 'XR' && <ModeButton isactive={`${tab === 'INTRO'}`} text='INTRO' kind='ProjectDetail' handleModeClick={() => handleTabClick('INTRO')} />}
                <ModeButton isactive={`${tab === 'ABOUT'}`} text='ABOUT' kind='ProjectDetail' handleModeClick={() => handleTabClick('ABOUT')} />
                <ModeButton isactive={`${tab === 'SKILLS'}`} text='SKILLS' kind='ProjectDetail' handleModeClick={() => handleTabClick('SKILLS')} />
            </TabArea>
            <Content>
                {tab === 'INTRO' && (
                    data?.project && <ProjectDetailItem mode="INTRO" data={data.project} />
                )}
                {tab === 'ABOUT' && (
                    data?.project && <ProjectDetailItem mode="ABOUT" category={category} data={data.project} />
                )}
                {tab === 'SKILLS' && (
                    data?.project && <ProjectSkills skills={data.project.skills} />
                )}
            </Content>
        </Container>
    )
}