import React, { useState, useEffect, useRef } from "react";

export default function Dropdown({
  options,
  label,
  selected,
  onSelectedChange,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // close dropdown on click using 'useRef'
  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) return;
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  //   render list
  const renderedOptions = options.map((option) => {
    if (selected.value === option.value) return null;

    return (
      <div
        onClick={() => onSelectedChange(option)}
        className="item"
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  function onDropdownClick() {
    setOpen((prevState) => !prevState);
  }

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label htmlFor="" className="label">
          {label}
        </label>
        <div
          onClick={onDropdownClick}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}
