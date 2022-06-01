import { useState } from "react";
import styled from "styled-components";
import '../../styles/variables.css';

const Container = styled.div`
    width: 100%;
    padding: 0 var(--body-padding);

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
const ProfileImage = styled.div`
    width: 20%;
    height: auto;
    aspect-ratio: 3 / 4;
    background-color: pink;
`;
const Content = styled.div`
    padding: 0 2em;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ModeButtons = styled.div`
    margin-bottom: 1em;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ModeButton = styled.button<{ isactive: string }>`
    width: 50%;
    text-align: center;
    background-color: transparent;
    & > span{
        border-bottom: ${({ isactive }) => isactive === 'true' ? '2px solid pink' : 'none'};
    }
`;
const Name = styled.span`
    color: pink;
`;

export default () => {
    const [mode, setMode] = useState<'ABOUT' | 'SKILLS'>('ABOUT');
    const handleModeClick = (value: 'ABOUT' | 'SKILLS') => setMode(value);
    return (
        <Container>
            <ProfileImage />
            <Content>
                <ModeButtons>
                    <ModeButton isactive={`${mode === 'ABOUT'}`} onClick={() => handleModeClick('ABOUT')}><span className="underlined">ABOUT</span></ModeButton>
                    <ModeButton isactive={`${mode === 'SKILLS'}`} onClick={() => handleModeClick('SKILLS')}><span className="underlined">SKILLS</span></ModeButton>
                </ModeButtons>
                <div>
                    <h1>Hi There! I'm <Name>Chaeri</Name></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh purus, semper a congue egestas, convallis ac magna. Vivamus sit amet arcu at nisi ultricies molestie. Etiam lacinia lorem eu neque commodo hendrerit. Nullam placerat, magna ac aliquet fringilla, arcu purus convallis risus, vel consequat massa lacus pulvinar sapien. Nullam sit amet odio volutpat, dignissim nisi a, mattis arcu. Maecenas semper eros et mollis faucibus. Aenean sed mollis risus. Duis in pretium arcu, eu malesuada quam. Mauris et magna ut sem condimentum feugiat. Suspendisse sit amet massa ac erat condimentum porta.
                    </p>
                </div>
            </Content>
        </Container>
    )
}