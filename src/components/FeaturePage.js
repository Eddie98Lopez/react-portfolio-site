import React, { useEffect, useState, createContext,useContext } from "react";
import { useParams } from "react-router-dom";


import { Section } from "./styled-components";
import QuickGallery from "./Gallery/QuickGallery";
import { Helmet } from "react-helmet";
import { useStore } from "../utils/store/StoreProvider";
import { getProjectById } from "../utils/supabase";
import ProjectDetails from "./ProjectDetails/ProjectDetails";

const ProjectContext = createContext()
export const useProject = ()=>useContext(ProjectContext)


const FeaturePage = () => {
  const { id } = useParams();
  const { projects,loading } = useStore().store;
  const {dispatch}= useStore()
  const [project, setProject] = useState({});


  useEffect( () => {
  
    getProjectById(projects.filter(item => item.id === Number(id))[0],id,dispatch,setProject)
    
  }, [id]);

  useEffect(() => {
    const section = document.querySelector("section");
    section.scrollIntoView({ behavior: "smooth" });
  }, [project]);

  return (
    <>
    <Section>

      {!loading && <ProjectDetails project={project}/>}

      
    </Section>
    <QuickGallery array={!loading!= {} && projects.filter(item=>item.id != id && item.library == project.library)} title="Similar Works" />
    </>
   
  );
};

export default FeaturePage;
