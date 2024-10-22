import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {useEffect, useState} from 'react';
import ProjectCard from './components/ProjectCard';
import projectService from './projectService';

interface ProjectProps {
  fetchProjects: Boolean
}

const Project: React.FC<ProjectProps> = ({fetchProjects}) => {
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
  }

  useEffect(() => {
    fetchProjectsAndSet();
  }, [fetchProjects])
    
  return (
    <Box id="projects">
      <Typography align='center' variant='h4' gutterBottom ><u>Projects</u></Typography>
      <Stack spacing={3}>
        {
          projects.map(project => <ProjectCard project={project} getProjectLangs={projectService.getProjectLangs}/>)
        }
      </Stack>
    </Box>
    
    // <ProjectCard projects={projects}/>
  )
};

export default Project;
