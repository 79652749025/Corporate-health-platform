// Основная структура интерфейса на React.js
import React from "react";
import "./App.css";

// Компоненты для каждой зоны интерфейса
import DataInputPanel from "./components/DataInputPanel";
import VisualizationPanel from "./components/VisualizationPanel";
import AgentAvatar from "./components/AgentAvatar";
import DocumentOutput from "./components/DocumentOutput";
import SpecialistTwin from "./components/SpecialistTwin";

function App() {
  return (
    <div className="app-container">
      {/* Левая панель для ввода данных */}
      <div className="data-input-panel">
        <DataInputPanel />
      </div>

      {/* Правая часть, разделённая на верх и низ */}
      <div className="right-panel">
        {/* Верхняя часть: визуализация и аватар */}
        <div className="upper-panel">
          <div className="visualization-panel">
            <VisualizationPanel />
          </div>
          <div className="agent-avatar-panel">
            <AgentAvatar />
          </div>
        </div>

        {/* Нижняя часть: документы и цифровой двойник */}
        <div className="lower-panel">
          <div className="document-output-panel">
            <DocumentOutput />
          </div>
          <div className="specialist-twin-panel">
            <SpecialistTwin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
