import React, { useEffect, useState, createContext,useContext } from "react";
import { useParams } from "react-router-dom";


import { Section } from "./styled-components";
import QuickGallery from "./Gallery/QuickGallery";
import { Helmet } from "react-helmet";
import { useStore } from "../utils/store/StoreProvider";
import { getProjectById, supabase } from "../utils/supabase";
import ProjectDetails from "./ProjectDetails/ProjectDetails";

const ProjectContext = createContext()
export const useProject = ()=>useContext(ProjectContext)


const FeaturePage = () => {
  const { id } = useParams();
  const { projects } = useStore().store;
  const [project, setProject] = useState(false);


  useEffect( () => {
    getProjectById(id)
    .then(res=> {console.log(res);setProject(res)})
    .catch(err=>console.log(err))
    
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
      {project && <ProjectDetails project={project}/>}

      
    </Section>
    <QuickGallery array={project!= {} && projects.filter(item=>item.id != id)} title="Similar Works" />
    </>
   
  );
};

export default FeaturePage;
