import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.17);
  transition: 0.3s ease-in-out;

  &::before {
    content: " ";
    display: block;
    width: 100%;
    padding-top: 100%;
  }

  & .info {

    z-index: 1;
    position: absolute;
    padding: 1rem;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.6);
    backdrop-filter: blur(2px);
    left: 0px;
    bottom: 0px;
    opacity: 0;
    transition: 0.3s ease-in-out;
   

    & div{
      width:100%;
      height:100%;
      
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:.5rem;
      justify-content:center;
      & h2,h3{
        display:block;
        text-align:center;
        color: white;
        font-family: ${props=>props.theme.displayFont};
        font-weight: normal;
        font-size:2rem;
    }
    & h3{font-size:1rem;
      font-family: roboto, sans-serif;
      text-transform: uppercase;
      color: grey;
      letter-spacing: 5px;
        font-weight:400}
    }

  }

  & img {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;

    width: 100%;
    height: 100%;
    object-fit: cover;
    ${(props) =>
      props.narnia &&
      `
     object-position: 50% 35%;`}
  }

  &:hover {
    transition: 0.3s ease-in-out;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, .5);
    & .info {
      transition: 0.3s ease-in-out;
      opacity: 1;
      height:100%;
    }
  }
`;

export default ImageContainer;
