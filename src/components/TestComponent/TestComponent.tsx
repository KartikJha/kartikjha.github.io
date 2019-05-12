import React from 'react';
import "./test-component.scss";
import themeForName from "../../theme";

const TestComponent: React.FC = () => {
  return (
    <div>
      <select
        onChange={({ target }) => {
          const theme = themeForName[target.value];
          Object.entries(theme).forEach(([k, v]) => {
            document.getElementsByTagName("html")[0].style.setProperty(k, String(v));
          });
        }}
      >
        {["dark", "light"].map(color => (
          <option value={color}>
            {color}
          </option>
        ))}
      </select>
      <p className="option">Hello World!</p>
    </div>
  );
}

export default TestComponent;
