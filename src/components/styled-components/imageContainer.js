import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;

    position: relative;
    box-shadow: 3px 3px 3px rgba(0,0,0,.17);
 
&::before{
     content: ' ';
     display: block;
     width: 100%;
     padding-top: 100%;
  
 }

 & .info{
     color:white;
     z-index: 1;
    position: absolute;
    padding: 1rem;
    height: 7rem;
    width: 100%;
    background: linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.7) ,black);
    left: 0px;
    bottom: 0px;
    opacity:0;
    transition:.3s ease-out;
 }

 
 & img{
     position: absolute;
     top: 0px;
     left: 0px;
     bottom: 0px;
     right: 0px;

     width:100%;
     height:100%;
     object-fit:cover;
     ${props=> props.narnia && `
     object-position: 50% 35%;`}
 }

 &:hover{

     & .info{
         transition:.3s ease-in width, padding-top;
         opacity:1;
     }
 }



`

export default ImageContainer;
