import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;

  &::before {
    content: " ";
    display: block;
    width: 100%;
    padding-top: 100%;
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
  }
`;

export default ImageContainer;
