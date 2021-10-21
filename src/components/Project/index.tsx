import React, {useEffect, useState} from 'react';
import ProjectCard from './components/ProjectCard';
import projectService from './projectService';

// interface ProjectProps {
//   message: String
// }

const Project: React.FC = () => {
  // const [fetchProjects, setFetchProjects] = useState(true);
  const [projects, setProjects] = useState([]);

  /**
   * fetches projects and sets in state
   */
  async function fetchProjectsAndSet() {
    const {value: projects, errors } = await projectService.getFilteredProjects();
    if (errors.length) {
      console.error(errors.join(','));
    }
    setProjects(projects);
    // setFetchProjects(false)
  }

  useEffect(() => {
    fetchProjectsAndSet();
  })
    
  return (
    <div>
      {
        projects.map(project => <ProjectCard project={project} getProjectLangs={() => true}/>)
      }
    </div>
    // <ProjectCard projects={projects}/>
  )
};



export default Project;
