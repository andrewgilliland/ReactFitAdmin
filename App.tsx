import React from "react";
import IconComponent, { IconState } from "./IconComponent";

const App: React.FC = () => {
  return (
    <div>
      <h1>Icon Example</h1>
      <IconComponent state={IconState.Filled} />
      <IconComponent state={IconState.NotFilled} />
    </div>
  );
};

export default App;
