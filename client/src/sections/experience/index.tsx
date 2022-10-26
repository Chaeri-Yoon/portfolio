import styled from "styled-components";
import Timeline from "@sections/experience/Timeline";
const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    & > div:nth-child(2n){
        flex-direction: row-reverse;
        align-self: flex-end;
        & > div:last-child{
            border-left-color: transparent;
            transform: rotate(45deg);
            & > div{
                transform: rotate(-45deg);
            }
        }
    }
    & > div:not(:nth-child(2n)){
        align-self: flex-start;
        & > div:last-child{
            border-right-color: transparent;
            transform: rotate(-45deg);
            & > div{
                transform: rotate(45deg);
            }
        }
    }
`;

export default () => {
    return (
        <Container>
            <Timeline year={2015} title={'Bachelor in Mechatronics Engineering'} mainColor={'#0F526E'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh purus, semper a congue egestas, conval
            </Timeline>
            <Timeline year={2016} title={'Bachelor in Mechatronics Engineering'} mainColor={'#16A5A0'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh purus, semper a congue egestas, conval
            </Timeline>
            <Timeline year={2017} title={'Bachelor in Mechatronics Engineering'} mainColor={'#E47324'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh purus, semper a congue egestas, conval
            </Timeline>
            <Timeline year={2018} title={'Bachelor in Mechatronics Engineering'} mainColor={'#EA4253'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh purus, semper a congue egestas, conval
            </Timeline>
        </Container>
    )
}