import React, { useState } from 'react';
import "./test-component.scss";
import themeForName from "../../theme";

const TestComponent: React.FC = () => {
  const [ a, setA ] = useState(0);
  return (
    <div>
      <select
        onChange={({ target }) => {
          const theme = themeForName[target.value];
          setA(a + 1);
          Object.entries(theme).forEach(([k, v]) => {
            document.getElementsByTagName("html")[0].style.setProperty(k, String(v));
          });
        }}
      >
        {["dark", "light"].map(color => (
          <option value={color}>
            {`${color} ${a}`}
          </option>
        ))}
      </select>
      <p className="option">Hello World!</p>
    </div>
  );
}

export default TestComponent;
