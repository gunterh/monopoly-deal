import React from "react";
import { Hand } from "./components/Hand";

export default function App() {
  const [collapsed, setCollapsed] = React.useState(true);

  const handleClick = () => {
    setCollapsed(c => !c);
  };

  return (
    <div>
      <h1>Monopoly Deal</h1>
      <Hand {...{ collapsed, handleClick }} />
    </div>
  );
}
