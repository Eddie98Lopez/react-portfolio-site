import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ldrjmzbrinwdylthbzry.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const getProjects = async () => {
  try {
    let projects = await supabase.from("projects").select("*");
    return projects.data
    
  } catch (error) {
    console.log(error);
    return error
  }
};

export const getProjectById = async (id) => {

    const project = await supabase.from('projects').select('*').eq('id', id)
    console.log(project)
    const projectPhotos = await supabase.from('projects_to_images').select('*').eq('project_id',id)
    console.log(projectPhotos)
    return {...project.data[0],images:projectPhotos.data}

    

}
