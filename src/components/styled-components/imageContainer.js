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
    height: 7rem;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.7),
      black
    );
    left: 0px;
    bottom: 0px;
    opacity: 0;
    transition: 0.3s ease-in-out;
    & h2,h3{
        position: absolute;
        top:40%;
        color: white;
        font-family: roboto,sans-serif;
        font-weight: bold;
        font-size:1.15rem;
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
    }
  }
`;

export default ImageContainer;
