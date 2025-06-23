import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { SignIn, SignUp } from '@clerk/clerk-react'

import Navbar from './components/navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Movies from './pages/movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'
import Favourite from './pages/Favourite'
const appearance = {
  elements: {
    card: "mx-auto my-20 shadow-xl", // centers the form with margin
  }
};
const CenteredWrapper = ({ children }) => (
  <div className="flex items-center justify-center min-h-screen px-4 bg-black">
    {children}
  </div>
);

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* ✅ Clerk Auth Routes */}
        <Route
    path="/sign-in/*"
    element={
      <CenteredWrapper>
        <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
      </CenteredWrapper>
    }
  />
 
        <Route
    path="/sign-up/*"
    element={
      <CenteredWrapper>
        <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
      </CenteredWrapper>
    }
  />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" signInUrl="/sign-in" appearance={appearance} />}
        />

        {/* ✅ Your App Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-booking" element={<MyBooking />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App;
