import React from "react";
import { Hand } from "./components/Hand";
import { PlayersPanel } from "./components/PlayersPanel";

export default function App() {
  const [collapsed, setCollapsed] = React.useState(true);

  const handleClick = () => {
    setCollapsed(c => !c);
  };

  return (
    <div>
      <PlayersPanel />
      <Hand {...{ collapsed, handleClick }} />
    </div>
  );
}
