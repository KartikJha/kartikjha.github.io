import React from 'react';

interface ProjectProps {
  project: any,
  getProjectLangs: Function
}

const Project: React.FC<ProjectProps> = ({
  project,
  getProjectLangs
}) => {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  )
};

export default Project;
