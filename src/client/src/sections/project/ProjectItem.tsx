import styled from "styled-components";

const Item = styled.li<{ thumbnail: string }>`
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: black;
    background-image: url(${({ thumbnail }) => thumbnail || null});
    background-position: center;
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
export default ({ thumbnail, projectID }: { thumbnail: string, projectID: string }) => {
    return (
        <Item thumbnail={thumbnail}>
            <Clickable id={projectID} />
        </Item>
    )
}