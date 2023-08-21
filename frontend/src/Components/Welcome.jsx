import React from 'react';
import './Welcome.css'; // You can define styling here

const Welcome = () => {
  return (
    <div className="welcome-message-container">

      <div className="welcome-text">
        <h1>Welcome to RCCG Abundant Life Parish</h1>
        <p>The Redeemed Christian Church of God (RCCG) has a vision to spread the Word of God to the ends of the earth. It is a bible believing church, where teaching of the word, prayer and living a holy life are emphasized.
        Location: 6, Memudu Ogidan street Okun-Ajah, Lagos.
        <p>Discover more about our services and events.</p>
        </p>
      </div>


      <div className="welcome-image">
        <img src="./image/welcomeimage.jpg" alt="Welcome"/>
      </div>

    </div>
  );
};

export default Welcome;
