import React, { useState } from 'react';

const Option = ({ href, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

const Dropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <span className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" aria-haspopup="true" aria-expanded={isHovered ? 'true' : 'false'}>
        Departments
      </a>
      {isHovered && (
        <div className="dropdown-content" style={{ position: 'relative' }}>
          <Option href="https://www.docplanner.com/department?dep=marketing" text="Choir" />
          <Option href="https://www.docplanner.com/department?dep=customer" text="Usher" />
          <Option href="https://www.docplanner.com/department?dep=it" text="Evangelism" />
          <Option href="https://www.docplanner.com/department?dep=finance" text="Sanitation" />
          <Option href="https://www.docplanner.com/department?dep=hr" text="Welfare" />
        </div>
      )}
    </span>
  );
};

export default Dropdown;
