import React from "react";
import styled from "styled-components";
import ProjectInfo from "./ProjectInfo";
import ProjectImages from "./ProjectImages";
import { useProject } from "../FeaturePage";


const ProjectWrap = styled.section`;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
 

  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows:auto;
    padding: 5%;
  }
`;


const ProjectDetails = (props) => {

const {title,description,images} = props.project
console.log(images)

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
