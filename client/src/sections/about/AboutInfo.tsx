import styled from "styled-components";

const Name = styled.span`
    color: pink;
`;
export default () => {
    return (
        <div>
            <h1>Hi There! I'm <Name>Chaeri</Name></h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh purus, semper a congue egestas, convallis ac magna. Vivamus sit amet arcu at nisi ultricies molestie. Etiam lacinia lorem eu neque commodo hendrerit. Nullam placerat, magna ac aliquet fringilla, arcu purus convallis risus, vel consequat massa lacus pulvinar sapien. Nullam sit amet odio volutpat, dignissim nisi a, mattis arcu. Maecenas semper eros et mollis faucibus. Aenean sed mollis risus. Duis in pretium arcu, eu malesuada quam. Mauris et magna ut sem condimentum feugiat. Suspendisse sit amet massa ac erat condimentum porta.
            </p>
        </div>
    )
}