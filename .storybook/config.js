import { configure } from '@storybook/react';
import helpers from "../src/helpers";

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
  // helpers.loadStories(["Project", "TestComponent"], "src/components")
  // require('../src/components/**/*.stories');
}


configure(loadStories, module);
