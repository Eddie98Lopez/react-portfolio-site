import React from "react";
import GalleryThumb from "./GalleryThumb";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useStore } from "../../utils/store/StoreProvider";
import { keywords } from "../../utils";

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
  const { projects } = useStore().store;
  const sorted = projects.sort((a,b)=> Date.parse(b.created_at) - Date.parse(a.created_at))

  return (
    <GalleryContainer>
      <Helmet>
        <title> Portfolio | Eddie Lopez </title>
        <meta name='keywords' content={keywords}/>
        <meta name='description' content={'Portfolio of different works from Eddie Lopez. Designer and Developer in the Fresno area.'}/>
      </Helmet>
      {sorted.map((item) => (
        <GalleryThumb key={Math.floor(Math.random()*10000000)} project={item} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
