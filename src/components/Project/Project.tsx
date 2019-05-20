import React from 'react';

interface ProjectProps {
  message: String
}

const Project: React.FC<ProjectProps> = ({
  message
}) => {
  return (
    <div>
      {message}
    </div>
  )
};

export default Project;
