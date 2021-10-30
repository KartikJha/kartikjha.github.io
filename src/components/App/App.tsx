import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Project from '../Project/index';

// const childPages = [
//   {
//     elevation: 0,
//     children: Project
//   }
// ]
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// function App() {
//   return <div>
//     <Project fetchProjects={true}/>
//   </div>

// }

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll >
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to Elevate App Bar
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        {/* <Landing />
            {
              childPages.map(cP => <Paper elevation={cP.elevation} children={cP.children} />)
            }
        */}
        <Project fetchProjects={true}/>
      </Container>
    </React.Fragment>
  );
}