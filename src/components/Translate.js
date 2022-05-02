import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
import { languageOptions } from "../data";

export default function Translate() {
  const [language, setLanguage] = useState(languageOptions[0]);
  const [text, setText] = useState("");
  console.log(text);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        options={languageOptions}
        onSelectedChange={setLanguage}
      />

      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
}
