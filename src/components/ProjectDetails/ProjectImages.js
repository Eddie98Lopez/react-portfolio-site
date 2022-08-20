import styled from "styled-components";
import React, { useState,useEffect } from "react";
import ImagesFullScreen from "./ImagesFullScreen";
import GalleryIcon from "./GalleryIcon";
import { useParams } from "react-router-dom";


const ImgThumbs = styled.div`
  box-sizing: border-box;
  &::before {
    content: " ";
    display: block;
    width: 100%;
    padding-top: 100%;
  }

  & img {
    opacity: ${(props) => (props.active === props.id ? "1" : ".35")};
    transition: 0.2s ease-in-out;
  }

  outline: ${(props) =>
    props.active === props.id
      ? `solid 3px ${props.theme.colors.white}`
      : "none"};
  transition: 0.15s ease-in-out;
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  width: 100%;
  gap: 1rem;
  height: 100%;

  & .a {
    position: relative;
    box-sizing: border-box;

    &:hover{
      cursor: -webkit-zoom-in;
      cursor: zoom-in;
    }

    &::before {
      content: " ";
      display: block;
      width: 100%;
      padding-top: 75%;
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
  }

  & .b {
    /* grid-area:b; */
    display: grid;
    grid-template-columns: 50px;
    grid-auto-rows: 50px;
    gap: 1rem;



    & > div {
      position: relative;

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
    }
  }

  & .gallery {
    position:relative;
    width: 50px;
    height: 50px;
    /* background: ${(props) => props.theme.colors.fill_blue}; */
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;

    & img{
      position: absolute;
      top:0;
      left:0;
      opacity:.2;
      right: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    & svg {
      width: 55%;
      fill:${(props) => props.theme.colors.white};
      height: auto;
      margin: auto;
      position: absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
    }
  }

  grid-template-columns: none;
  grid-template-areas: "a" "b";

  & .gallery {
    width:70px;
    height:70px;
  }

  & .b {
    grid-area: b;
    grid-template-columns: repeat(4, 70px);
    grid-auto-rows: 70px;
  }

  & .a {
    grid-area: a;
  }

  @media only screen and (max-width: 768px) {

  }

  @media only screen and (max-width: 345px) {
    grid-template-columns: none;
    grid-template-areas: "a" "b";

    & .gallery {
      width:50px;
      height:50px;
    }

    & .b {
      grid-area: b;
      grid-template-columns: repeat(4, 50px);
      grid-auto-rows: 50px;
    }

    & .a {
      grid-area: a;
    }
  }
`;

const ProjectImages = (props) => {
  const {images} = props
  const [active,setActive] = useState({})
  const [fullScreen,setFullScreen] = useState(false)

  useEffect(()=>{
    setActive(images[0])
  },[images])


  

  return (
    <>
      {fullScreen === true && (
        <ImagesFullScreen
          images={images}
          active={active}
          fullScreen={{ fullScreen, setFullScreen }}
        />
      )}
      {images.length>0 && (<Images outliner={active}>
        <div styles={{ background: "blue" }} className="b">
          {images
            .filter((item) => images.indexOf(item) < 3)
            .map((item) => (
              <ImgThumbs
                key={Math.random()*1000000}
                id={item}
                active={active}
                onClick={() => setActive(item)}
              >
                <img src={item.href} alt="boop" />
              </ImgThumbs>
            ))}

          {images.length > 3 && (
            <div className="gallery" onClick={()=>setFullScreen(true)} alt='view more images'>
              <img src={images[3].href}/>
              <GalleryIcon />
            </div>
          )}
        </div>
        <div
          styles={{ background: "grey" }}
          className="a"
          onClick={() => setFullScreen(true)}
        >
          <img src={active.href} alt="project-image" />
        </div>
      </Images>)}
    </>
  );
};

export default ProjectImages;
