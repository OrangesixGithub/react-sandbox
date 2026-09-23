import { useState } from "react";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import type { ComponentName } from "./catalog/components";
import { ControlsPanel } from "./components/layout/ControlsPanel";
import { ComponentContent } from "./components/layout/ComponentContent";
import { uiApp } from "./styles/ui-app";

export default function App() {
  const [selected, setSelected] = useState<ComponentName>("Button");


  return (
    <div className={uiApp.root}>
      <Header />
      <div className={uiApp.workspace}>
        <Sidebar selected={selected} onSelect={setSelected} />
        <ComponentContent selected={selected} />
        <ControlsPanel />
      </div>
    </div>
  );
}
