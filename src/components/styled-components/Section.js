import styled from "styled-components";

const Section = styled.section`
  box-sizing: border-box;
  padding:5%;
  width: 100%;
  position: relative;
  min-height: ${(props) => (props.height ? props.height : "80vh")};

 ${props=>props.theme.heading};

  & span,
  p {
    font-family: sans-serif;
    color: ${(props) => props.theme.colors.white};
    font-size: 1.15rem;
    line-height: 1.75rem;
  }



  ${(props) => props.styles};

  @media only screen and (max-width:768px){
    min-height:auto;
    padding:2.5%;
    margin:0;
  }
`;

export default Section;
