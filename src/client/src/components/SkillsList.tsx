import { skills } from "@data";
import styled from "styled-components";

export const ItemsList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 10%);
    gap: 1em;
    list-style-type: none;
`;
const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Image = styled.div<{ skillname: string }>`
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 1px solid rgba(0, 0, 0, .3);
    border-radius: 50%;
    
    background-image: url(${({ skillname }) => `/images/skills/${skillname}.png`});
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${({ skillname }) => skillname === skills.TYPESCRIPT ? "#217BD4" : "white"};
`;
export default ({ children }: any) => {
    return (
        <ItemsList>
            {children}
        </ItemsList>
    )
}
export const Skill = ({ skillname }: { skillname: string }) => {
    return (
        <Item><Image skillname={skillname} /></Item>
    )
}