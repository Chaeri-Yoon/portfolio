import React from "react";
import ReactDOM from "react-dom"
import styled from "styled-components";

const Background = styled.div`
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;
const Container = styled.div`
    width: 45%;
    aspect-ratio: 4 / 3;
    background-color: white;
    border: 0.5px solid rgba(0, 0, 0, .2);
    border-radius: 1em;
`;
export default (props: any) => {
    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        if (event.target !== event.currentTarget) return;
        props.handleClose();
    }
    return ReactDOM.createPortal(
        <Background onClick={handleClose}>
            <Container>
                {props.children}
            </Container>
        </Background>
        , document.getElementById('portal')!);
}