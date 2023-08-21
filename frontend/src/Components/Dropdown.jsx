import React, { useState } from 'react';

const Option = ({ href, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <span className="dropdown" onClick={toggleDropdown}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" aria-haspopup="true" aria-expanded={isOpen ? 'true' : 'false'}>
        Departments
      </a>
      {isOpen && (
        <div className="dropdown-content" style={{ position: 'relative' }}>
          <Option href="https://www.docplanner.com/department?dep=marketing" text="Chior" />
          <Option href="https://www.docplanner.com/department?dep=customer" text="Usher" />
          <Option href="https://www.docplanner.com/department?dep=it" text="Evengalism" />
          <Option href="https://www.docplanner.com/department?dep=finance" text="Sanitation" />
          <Option href="https://www.docplanner.com/department?dep=hr" text="Welfare" />
        </div>
      )}
    </span>
  );
};

export default Dropdown;
