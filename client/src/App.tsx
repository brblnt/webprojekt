import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "./pages/Home/HomePage";
import {NavBar} from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccommodationPage } from "./pages/Accommodation/AccomodationPage";
import { LoginPage } from "./pages/Auth/LoginPage";
import { RegisterPage } from "./pages/Auth/RegisterPage";
import { AccommodationDetail } from "./pages/Accommodation/AccommodationDetail";
import { AccommodationCreatePage } from "./pages/Accommodation/AccommodationCreatePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProfilePage } from "./pages/Profile/ProfilePage";
import { BookingCreatePage } from "./pages/Booking/BookingCreatePage";
import { Settings } from "./pages/Profile/Settings";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import theme from "./utils/theme";
import { RoomDetail } from "./pages/Room/RoomDetail";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={`/`} element={<HomePage />} />
        <Route path={`/accommodation`} element={<AccommodationPage />} />
        <Route
          path={`/accommodation/:accommodationId`}
          element={<AccommodationDetail />}
        />
        <Route
          path={`/accommodation/post`}
          element={<AccommodationCreatePage />}
        />
        <Route
          path={`/accommodation/:accommodationId/room/booking`}
          element={<BookingCreatePage />}
        />
        <Route
          path={`/accommodation/:accommodationId/:roomId/`}
          element={<RoomDetail />}
        />
        <Route path={`/login`} element={<LoginPage />} />
        <Route path={`/register`} element={<RegisterPage />} />
        <Route path={`/profile/:userName`} element={<ProfilePage />} />
        <Route path={`/profile/:userName/settings`} element={<Settings />} />
        <Route path={`/dashboard`} element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </ChakraProvider>
);
