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
const Image = styled.div<{ name: string, image: string }>`
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 1px solid rgba(0, 0, 0, .3);
    border-radius: 50%;
    background-image: url(${({ image }) => image});
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${({ name }) => name === skills.TYPESCRIPT ? "#217BD4" : (name === skills.BOOTSTRAP ? "#673AB7" : "white")};
`;
export default ({ children }: any) => {
    return (
        <ItemsList>
            {children}
        </ItemsList>
    )
}
export const Skill = ({ name, image }: { name: string, image: string }) => {
    return (
        <Item><Image name={name} image={image} /></Item>
    )
}