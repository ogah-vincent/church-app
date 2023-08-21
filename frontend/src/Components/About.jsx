import React from 'react';
import DropdownComponent from './DropdownComponent';
import { useLocation } from 'react-router-dom';
import './DropdownStyles.css'; // Import the CSS file

function About() {
  const location = useLocation();
  const shouldRenderDropdown = location.pathname !== '/about';

  const aboutOptions = [
    { label: 'RCCG: church has become one of the fastest growing Pentecostal churches', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  return (
    <div className='about'>
      <h1>About Page</h1>
      {shouldRenderDropdown && <DropdownComponent options={aboutOptions} />}
      <p>
        Today, the church has become one of the fastest growing Pentecostal churches in the world. RCCG has grown from when Pastor Adeboye took charge to over 14,000 parishes in Nigeria and branches in over a hundred countries.
      </p>
    </div>
  );
}

export default About;
