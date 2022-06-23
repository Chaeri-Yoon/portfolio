import styled from "styled-components";

export const ItemsList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 10%);
    column-gap: 1em;
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
    background-size: ${({ skillname }) => skillname === 'vuforia' ? '90%' : 'contain'};
    background-position: center;
    background-repeat: no-repeat;
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