import React from "react";

const NewTabLink = ({ name, url, children, className }) => {
  return (
    <a
      name={name}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default NewTabLink;
