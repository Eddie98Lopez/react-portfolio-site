import React, { useEffect, useState, createContext,useContext } from "react";
import { useParams } from "react-router-dom";
import { Section } from "./styled-components";
import QuickGallery from "./Gallery/QuickGallery";
import { Helmet } from "react-helmet";
import { useStore } from "../utils/store/StoreProvider";
import { getProjectById, supabase } from "../utils/supabase";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import styled from 'styled-components'

const Header = styled.div`
box-sizing: border-box;
position:absolute;
right:-1.25%;
top:0;
width:auto;
color:grey;
letter-spacing:.5rem;
font-size: 4rem;
font-family: ${props=>props.theme.displayFont};
transform-origin: bottom right;
transform: rotate(-90deg) translateX(-100%); 
z-index: 20000;`



const FeaturePage = () => {
  const { id,library } = useParams();
  console.log(useParams())
  const { projects,loading } = useStore().store;
  const {dispatch}= useStore()
  const [project, setProject] = useState(false);


  useEffect( () => {
    getProjectById(id,dispatch,setProject)
    
  }, [id]);

  useEffect(() => {
    const section = document.querySelector("section");
    section.scrollIntoView({ behavior: "smooth" });
  }, [project]);

  return (
    <>
    <Section>
      <Helmet>
        <title>
          {project.title || ''} | {project.library || ''} | Eddie Lopez
        </title>
        <meta name="description" content={project.description || ''} />
      </Helmet>

      {!loading && <Header>{project.library}</Header>}
      
      {!loading && <ProjectDetails project={project}/>}

      
    </Section>
    <QuickGallery array={!loading && projects.filter(item=>item.id != id)} title="Similar Works" />
    </>
   
  );
};

export default FeaturePage;
