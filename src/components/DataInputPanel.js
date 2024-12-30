// components/DataInputPanel.js
import React from "react";
function DataInputPanel() {
  return (
    <div>
      <h2>Input Data</h2>
      <textarea
        placeholder="Enter your data here..."
        rows="10"
        style={{ width: "100%" }}
      ></textarea>
    </div>
  );
}

export default DataInputPanel;
