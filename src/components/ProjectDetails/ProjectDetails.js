import React from "react";
import styled from "styled-components";
import ProjectInfo from "./ProjectInfo";
import ProjectImages from "./ProjectImages";
import { useProject } from "../FeaturePage";


const ProjectWrap = styled.section`;
  display: grid;
  height: 80vh;
  grid-template-columns: 1.5fr 1fr ;
  gap: 3rem;
  position:relative;
 

  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows:auto;
    height: auto;
    padding: 2.5%;
  }
`;


const ProjectDetails = (props) => {

const {title,description,images} = props.project

return (
    <ProjectWrap>

      <ProjectImages images={images}/>

      <ProjectInfo>
        <h2>
          {title}
        </h2>

        <p>{description}</p>
      </ProjectInfo>
    </ProjectWrap>
  );
};

export default ProjectDetails;
