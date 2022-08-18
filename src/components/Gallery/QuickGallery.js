import React from "react";
import GalleryThumb from "./GalleryThumb";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0% 5% 5% 5% ;

  ${(props) => props.theme.heading};


  & .images {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);

    @media only screen and (max-width: 768px) {
      gap: 0.5rem;
      padding: 0;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const QuickGallery = (props) => {
  const { title, array } = props;
  const use = [];
  for (let i = 0; i < 4; i++) {
    if (array[i]) {
      use.push(array[i]);
    } else {
      break;
    }
  }
  return (
    <Wrapper {...props}>
      <h2 className="title">{title}</h2>
      <div className="images">
        {use.map((item) => (
          <GalleryThumb project={item} key={item.id}/>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuickGallery;
