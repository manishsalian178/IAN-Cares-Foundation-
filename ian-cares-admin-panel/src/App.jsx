import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminNavbar from './components/AdminNavbar'
import AdminHero from './components/AdminHero'
import BlogAdmin from './components/BlogAdmin'
import GalleryAdmin from './components/GalleryAdmin'
import JourneyAdmin from './components/JourneyAdmin'
import LiveTouchAdmin from './components/LiveTouchAdmin'
import ClientRatingAdmin from './components/ClientRatingAdmin'
import Login from './components/Login'
import Signup from './components/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <ProtectedRoute>
              <AdminNavbar />
              <AdminHero />
            </ProtectedRoute>
          } />
          <Route path="/gallery" element={
            <ProtectedRoute>
              <AdminNavbar />
              <GalleryAdmin />
            </ProtectedRoute>
          } />
          <Route path="/blog" element={
            <ProtectedRoute>
              <AdminNavbar />
              <BlogAdmin />
            </ProtectedRoute>
          } />
          <Route path="/journey" element={
            <ProtectedRoute>
              <AdminNavbar />
              <JourneyAdmin />
            </ProtectedRoute>
          } />
          <Route path="/live-touch" element={
            <ProtectedRoute>
              <AdminNavbar />
              <LiveTouchAdmin />
            </ProtectedRoute>
          } />
          <Route path="/client-rating" element={
            <ProtectedRoute>
              <AdminNavbar />
              <ClientRatingAdmin />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
