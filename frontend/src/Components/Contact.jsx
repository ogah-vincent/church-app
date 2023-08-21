import React from 'react';
import DropdownComponent from './DropdownComponent';
import { useLocation } from 'react-router-dom';
import './DropdownStyles.css'; // Import the CSS file

function Contact() {
  const location = useLocation();
  const shouldRenderDropdown = location.pathname !== '/contact';

  const contactOptions = [
    { label: 'Tel: 08032280237', value: 'tel' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  return (
    <div>
      <h1>Contact Page</h1>
      {shouldRenderDropdown && <DropdownComponent options={contactOptions} />}
      <p>
        Tel: 08032280237
        <br />
        Email: enquiries@rccgadministrators.org
      </p>
    </div>
  );
}

export default Contact;
