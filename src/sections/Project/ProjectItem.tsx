import styled from "styled-components";

const Item = styled.li<{ thumbnail: string }>`
    width: 100%;
    aspect-ratio: 1 / 1;
    // The url will be replaced with the one containing the path of a thumbNail corresponding to each project
    background-image: url(/images${({ thumbnail }) => thumbnail || null});
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: contain;
`;
const Clickable = styled.button`
    width: 100%;
    aspect-ratio: 1 / 1;
    opacity: 0;
    &:hover{
        opacity: 0.5;
    }
`;
export default ({ thumbnail, projectName }: { thumbnail: string, projectName: string }) => {
    return (
        <Item thumbnail={thumbnail}>
            <Clickable id={projectName} />
        </Item>
    )
}