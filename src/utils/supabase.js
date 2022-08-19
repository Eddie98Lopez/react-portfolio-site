import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ldrjmzbrinwdylthbzry.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const getProjects = async (dispatch) => {
  try {
    let projects = await supabase.from("projects").select("*");
    setTimeout(()=>{
      dispatch({type:'FETCH_PROJECTS', payload:projects.data})
    },3500)
    
  } catch (error) {
    console.log(error);
  }
};

export const getProjectById = async (project,id,dispatch,setProject) => {
  try {
  

    if (!project){
      
      const fetchedProject = await supabase.from('projects').select('*').eq('id', id)
      const projectPhotos = await supabase.from('projects_to_images').select('*').eq('project_id',id)
      const sorted = projectPhotos.data.sort((a, b) => a.index - b.index)
      console.log('Fetched project and images')
      setProject( {...fetchedProject.data[0],images:sorted})
      dispatch({type:'SET_LOAD_FALSE'})

    }else{

      const projectPhotos = await supabase.from('projects_to_images').select('*').eq('project_id',id)
      const sorted = projectPhotos.data.sort((a, b) => a.index - b.index)
      console.log('fetched only images')
      setProject( {...project,images:sorted})
      dispatch({type:'SET_LOAD_FALSE'})

    }


    
  } catch (error) {
    console.log(error)
    
  }


 

}
