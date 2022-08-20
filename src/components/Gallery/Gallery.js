import React from "react";
import GalleryThumb from "./GalleryThumb";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useStore } from "../../utils/store/StoreProvider";

const GalleryContainer = styled.div`
  padding: 5%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 435px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
`;

const Gallery = () => {
  const { store } = useStore();

  return (
    <GalleryContainer>
      <Helmet>
        <title> | Eddie Lopez </title>
      </Helmet>
      {store.projects.map((item) => (
        <GalleryThumb key={item.id} project={item} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
