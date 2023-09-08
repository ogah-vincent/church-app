import React from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
    const item = {
        name: "Location",
        location: {
            lat: 6.484570,
            lng: 3.575270
        },
        address: "6, Memudu Ogidan Street, Okun Ajah, Lagos",
        title: "RCCG ABUNDANT LIFE PARISH"
    }

    const mapStyles = {
        height: "500px",
        width: "100%"
    }

    const defaultCenter = {
        lat: 6.5244,
        lng: 3.3792
    }
  
    return (
        <div>
            <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">
                <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
                    <Marker
                        key={item.name}
                        position={item.location}
                        label={item.title} // Use the title as a custom label
                        title={item.address} // Tooltip
                    ></Marker>
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default MapContainer;
