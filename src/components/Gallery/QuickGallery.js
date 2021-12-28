import React from "react";
import GalleryThumb from "./GalleryThumb";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 5%;


  ${props => props.theme.heading};

  & .images {
    display: grid;
    gap:1rem;
    grid-template-areas: "a a a a";

    @media only screen and (max-width:768px){
        grid-template-areas: "a a"
        "a a";
    }

    & div{
        background:white;
    }
  }
`;

export const QuickGallery = (props) => {
  const { title, array, link } = props;
  return (
    <Wrapper>
      <h2>{title}</h2>
      <div className="images">
        {array.map((item) => (
          <GalleryThumb project={item} />
        ))}
      </div>
      <span>{link}</span>
    </Wrapper>
  );
};

export default QuickGallery;
