import styled from "styled-components";

const Section = styled.section`
  box-sizing: border-box;
  padding: 0 5%;
  width: 100%;
  position: relative;
  min-height: ${(props) => (props.height ? props.height : "80vh")};

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => props.theme.displayFont};
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.grey};
  }

  & h2 {
    font-size: 1.5rem;
  }

  & span,
  p {
    font-family: sans-serif;
    color: ${(props) => props.theme.colors.white};
    font-size: 1.15rem;
    line-height: 1.75rem;
  }

  ${(props) => props.styles}
`;

export default Section;
