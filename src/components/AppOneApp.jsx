import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePage/HomePages";
// import Arrival from'../components/Arrival/Arrival';
// import MenuTop from "../pages/HomePage/FixedMenu/MenuTop";
// import ReactCarousel from "../pages/HomePage/Carousel/Carousel";
// import Ariival from "../pages/HomePage/ArrivalHomeFages/Ariival";
// import ManuMinima from "../pages/HomePage/NanuMinima/NanuMinima";
import SandalNam from '../pages/HomePage/Classify/SandalNam/SandalNam';
import SandalNu from '../pages/HomePage/Classify/SandalNu/SandalNu';
import Dep from '../pages/HomePage/Classify/Dep/Dep'
function AppOneApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePages />} />
          <Route path="/" element={<HomePages />}>
            <Route path="/sandalnam" element={<SandalNam/>}></Route>
            <Route path="/sandalnu" element={<SandalNu/>}></Route>
            <Route path="/dep" element={<Dep/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppOneApp;
