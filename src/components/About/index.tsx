import React from 'react';
import { Box, Typography, Stack, Divider, Paper } from '@mui/material';
import { LaptopMac, Storage } from '@mui/icons-material';

const About: React.FC = () => {
  return (
    <Box id="about" sx={{ padding: '20px', textAlign: 'center' }}>
      {/* <Typography align="left" variant="h4" gutterBottom>
        About
      </Typography> */}

      {/* Stack for Image and Text Side-by-Side */}
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
        <Box
          component="img"
          src="x_pic.jpg" // Replace with the actual path to your image
          alt="Kartik Jha"
          sx={{
            width: { xs: '80px', sm: '100px', md: '120px' },
            borderRadius: '100%',
            boxShadow: 3,
          }}
        />
        <Typography variant="body1" sx={{ maxWidth: '500px' }}>
          I'm a seasoned full-stack developer with expertise across diverse domains like logistics, fintech, internet media, and cloud provisioning.
          My contributions include building scalable applications, optimizing workflows, and creating modular frontend and backend components.
        </Typography>
      </Stack>

      {/* <Typography variant="h5" gutterBottom>
        Technology Stack
      </Typography> */}

      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 4 }}>
        <Paper elevation={3} sx={{ padding: '20px', width: '250px' }}>
          <Typography variant="h6">Frontend</Typography>
          <LaptopMac fontSize="large" color="primary" />
          <Typography>React, Angular</Typography>
          <Typography variant="body2">UI & Client Logic</Typography>
        </Paper>
        <Paper elevation={3} sx={{ padding: '20px', width: '250px' }}>
          <Typography variant="h6">Backend</Typography>
          <Storage fontSize="large" color="primary" />
          <Typography>Node.js, Microservices</Typography>
          <Typography variant="body2">Data Storage, APIs, Cache</Typography>
        </Paper>
      </Stack>
    </Box>
  );
};

export default About;
