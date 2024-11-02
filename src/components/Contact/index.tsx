import React from 'react';
import { Box, Typography, Stack, Link, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const Contact: React.FC = () => {
  return (
    <Box id="contact" sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="body1" sx={{ mb: 2 }}>
        I'm open to new opportunities and collaborations. Feel free to reach out!
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mt: 2 }}>
        <IconButton component="a" href="https://www.linkedin.com/in/kartik-j-31074b170/" color="primary">
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton component="a" href="https://github.com/KartikJha" color="primary">
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton component="a" href="mailto:kartik.n.jha@gmail.com" color="primary">
          <Email fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Contact;
