import React from "react";

export default function Link({ href, className, children }) {
  const click = (e) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a href={href} className={className} onClick={click}>
      {children}
    </a>
  );
}
