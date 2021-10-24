import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Project from ".";

storiesOf("Project", module).add("display message", () => (
  <Project message="Hello World!" />
));
