import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import { data, options } from "./data.js";
import Route from "./components/Route";
import Header from "./components/Header";
import ShowOutput from "./components/ShowOutput";

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="App ui container">
      <Header />
      <Route path="/">
        <Accordion data={data} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
        <ShowOutput selected={selected} />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
