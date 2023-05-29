import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { HomePage } from "./pages/Home/HomePage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccommodationPage } from "./pages/Accommodation/AccomodationPage";
import { LoginPage } from "./pages/Auth/LoginPage";
import { RegisterPage } from "./pages/Auth/RegisterPage";
import { AccommodationDetail } from "./pages/Accommodation/AccommodationDetail";
import { AccommodationCreatePage } from "./pages/Accommodation/AccommodationCreatePage";
import { RoomPage } from "./pages/Room/RoomPage";
import { RoomCreatePage } from "./pages/Room/RoomCreatePage";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={`/`} element={<HomePage />} />
        <Route path={`/accommodation`} element={<AccommodationPage />} />
        <Route path={`/accommodation/:accommodationId`} element={<AccommodationDetail />} />
        <Route path={`/accommodation/:accommodationId/room`} element={<RoomPage />} />
        <Route path={`/accommodation/:accommodationId/room/post`} element={<RoomCreatePage />} />
        <Route path={`/accommodation/post`} element={<AccommodationCreatePage />} />
        <Route path={`/login`} element={<LoginPage />} />
        <Route path={`/register`} element={<RegisterPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </ChakraProvider>
);
