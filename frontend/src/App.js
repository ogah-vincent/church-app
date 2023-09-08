import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnlineGiving from "./Components/OnlineGiving"; // Renamed from Giving
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Media from "./Components/Media";
import Navbar from "./Components/NavBar";
import NotFound from "./Components/NotFound";
import Carousel from './Components/Carousel';
import DropdownComponent from './Components/DropdownComponent';
import Footer from "./Components/Footer";
import PaymentSuccess from "./Components/PaymentSuccess";
import Welcome from "./Components/Welcome";
import MapContainer from "./Components/MapContainer";

import './App.css';

const App = () => {

  const images = [
    './image/Mummy.jpg',
    './image/Road.jpg',
    './image/unsplash 5.jpg',
    // Add more image URLs here
  ];

  return (
    <Router>
      <div className="App background-image">
        <Navbar />
        <Routes>
        <Route path="/" exact component={OnlineGiving} />
        <Route path="/success" component={PaymentSuccess} />
          <Route path="/" element={<Home />} />
          <Route path="/" exact component={DropdownComponent} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} /> {/* Moved Media outside Contact route */}
          <Route path="/login" element={<OnlineGiving />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

         <Welcome />
        <Carousel images={images} />
        <MapContainer />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
