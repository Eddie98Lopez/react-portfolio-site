import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ldrjmzbrinwdylthbzry.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const getProjects = async (dispatch) => {
  try {
    let projects = await supabase.from("projects").select("*");
    setTimeout(()=>{
      dispatch({type:'FETCH_PROJECTS', payload:projects.data})
    },2000)
    
  } catch (error) {
    console.log(error);
  }
};

export const getProjectById = async (id,dispatch,setProject) => {

  try {
    const project = await supabase.from('projects').select('*').eq('id', id)
    console.log(project)
    const projectPhotos = await supabase.from('projects_to_images').select('*').eq('project_id',id)
    console.log(projectPhotos)
   setProject( {...project.data[0],images:projectPhotos.data})
   dispatch({type:'SET_LOAD_FALSE'})
    
  } catch (error) {
    console.log(error)
    
  }


 

}
