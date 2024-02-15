"use client"
import React from 'react';
import HomePage from '../pages/home/Home';
import Faqs from '../pages/faq/Faqs';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function Home() {
  return <main>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<Faqs />} />
      </Routes>
    </BrowserRouter>
  </main>;
}
