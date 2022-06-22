import styled from "styled-components";

export const ItemsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 10%);
    column-gap: 1em;
    list-style-type: none;
`;
const Item = styled.li`
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
const Image = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 1px solid rgba(0, 0, 0, .3);
    border-radius: 50%;
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
        <Item><Image src={`/images/skills/${skillname}.png`} /></Item>
    )
}