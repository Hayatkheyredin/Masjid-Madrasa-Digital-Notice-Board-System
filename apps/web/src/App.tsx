import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthPlaceholderPage } from './pages/AuthPlaceholderPage'
import { LandingPage } from './pages/LandingPage'
import { SignUpPage } from './pages/SignUpPage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route
          path="/login"
          element={
            <AuthPlaceholderPage
              title="Sign in"
              description="Sign-in form and API wiring will live here."
            />
          }
        />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}
