import React from "react";
import { useParams } from "react-router-dom";
import { illustrationGallery } from "../assets/Illustration/illustrationGallery";
import styled from "styled-components";
import { Section } from "./styled-components";
import QuickGallery from "./Gallery/QuickGallery";
import { Helmet } from "react-helmet";
const drive = "https://drive.google.com/uc?id=";

const FeaturedWork = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:1.5rem;
  height: auto;
  & .img {
    box-sizing: border-box;
    width: 100%;
    height: auto;

    & img {
      box-sizing: border-box;
      object-fit: contain;
      object-position:50% 0;
      width: inherit;
      height: inherit;
    }
  }
  & .info {
    width: 1fr;
    overflow-wrap: break-word;
    padding-top:40%;

    & h2 {
      width: 60%;
      font-size: 1.5rem;
      color: ${props=>props.theme.colors.grey};
    }

    & p {
      overflow-wrap: break-word;
      width: 100%;
      font-size: 1rem;
      color: lightgrey;
    }
  }

  @media only screen and (max-width:768px){
    grid-template-columns: 100%;
    & .img {
        box-sizing: border-box;
        width: 100%;
        height: 60vh;}
    & .info {
        width: 1fr;
        overflow-wrap: break-word;
        padding-top:0;}

  }
`;



const FeaturePage = () => {
  const { category,id } = useParams();
  // eslint-disable-next-line
  const boop = illustrationGallery.filter((item) => item.id == id)[0];
  const quick = illustrationGallery.filter(
      // eslint-disable-next-line
    (item) => item.collection === boop.collection && item.id != id
  );

  return (
    <Section>
        <Helmet>
            <title>{boop.title} | {category} | Eddie Lopez</title>
        </Helmet>
      <FeaturedWork>
        <div className="img">
          <img src={`${drive}${boop.cover_photo}`} alt={boop.title} />
        </div>
        <div className="info">
          <h2>{boop.title}</h2>
          <hr/>
          <p>{boop.description}</p>
        </div>
      </FeaturedWork>

      <QuickGallery array={quick} title="Similar Works" className="qg" />
    </Section>
  );
};

export default FeaturePage;
