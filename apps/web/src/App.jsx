import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthPlaceholderPage } from './pages/AuthPlaceholderPage'
import { LandingPage } from './pages/LandingPage'
import { SignInPage } from './pages/SignInPage'
import { SignUpPage } from './pages/SignUpPage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<SignInPage />} />
        <Route
          path="/forgot-password"
          element={
            <AuthPlaceholderPage
              title="Reset password"
              description="We’ll add email reset flow when the API is ready."
            />
          }
        />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}
