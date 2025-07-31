import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { SignIn, SignUp } from '@clerk/clerk-react'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'
import Favourite from './pages/Favourite'
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard'
import AddShows from './pages/Admin/AddShows'
import ListShows from './pages/Admin/ListShows'
import  ListBookings from './pages/Admin/ListBookings'
import { useAppContext } from './context/AppContext.jsx'
import Loading from './components/Loading.jsx'
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
  const {user}=useAppContext()

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
        <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/loading/:nextUrl" element={<Loading />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path='/admin/*' element={ user ? <Layout/> : (
          <div className='min-h-screen flex justify-center items-center'>
            <SignIn fallbackRedirectUrl={'/admin'} />
          </div>
        )}>
        <Route index element={<Dashboard/>}/>
        <Route path='add-shows' element={<AddShows/>} />
        <Route path='list-shows' element={<ListShows/>} />
        <Route path='list-bookings' element={<ListBookings/>} />

        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App;
