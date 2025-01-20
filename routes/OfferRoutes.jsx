import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Offer from '../pages/Offer';


const OfferRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Offer />} />
      {/*<Route path="/servers" element={<Servers />} /> {/* Trasa dla /offer/servers */}
    </Routes>
  );
};

export default OfferRoutes;
