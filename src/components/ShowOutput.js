import React from "react";

export default function ShowOutput({ selected }) {
  return (
    <div className="ui segment">
      <h1 className="ui header"> Output</h1>
      <p style={{ color: selected.value }} className="ui header">
        I am which Color?
      </p>
    </div>
  );
}
