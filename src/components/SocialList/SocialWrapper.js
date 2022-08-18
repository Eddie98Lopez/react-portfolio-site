import styled from "styled-components";

const SocialWrapper = styled.div`
height: 4rem;
display:flex;
align-items:center;
justify-content:flex-end;

  text-align: right;
  & a {
    margin: 0 0.25rem;

    & svg {
      fill: #c9c9c9;
      transition: 0.3s ease-in-out;
    }
  }
  
  & a:hover > svg {
    transition: 0.3s ease-in-out;
    transform:translate(0,-10px);
    width: 2.75rem;
    height:auto;
    fill: ${(props) => props.theme.colors.black};
  }
`;
export default SocialWrapper