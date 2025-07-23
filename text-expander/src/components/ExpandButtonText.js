import React from "react";

export function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = React.useState(expanded);

  function truncateString(string) {
    const displayString =
      string.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
    return displayString;
  }

  function handleExpanded() {
    setIsExpanded(!isExpanded);
  }

  const buttonStyle = {
    background: "none",
    border: "none",
    color: buttonColor,
    cursor: "pointer",
    font: "inherit",
    margin: "4px",
  };

  return (
    <div className={className}>
      <span>{isExpanded ? children : truncateString(children)}</span>
      <button style={buttonStyle} onClick={() => handleExpanded()}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
