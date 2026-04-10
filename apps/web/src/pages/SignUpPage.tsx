import type { FormEvent } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail, ShieldCheck, User } from 'lucide-react'
import { MasjidMark } from '../components/auth/MasjidMark'
import { Button } from '../components/ui/Button'
import { AuthTextField } from '../components/ui/AuthTextField'

function GoogleGlyph() {
  return (
    <svg
      className="auth-social__icon"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.706c-.18-.54-.282-1.117-.282-1.706s.102-1.166.282-1.706V4.962H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z"
      />
    </svg>
  )
}

function AppleGlyph() {
  return (
    <svg
      className="auth-social__icon"
      width="16"
      height="18"
      viewBox="0 0 814 1000"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 6630 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-163.3c31.1-36.9 53.1-87.1 53.1-137.8 0-7.9-.7-15.8-2.2-22.2-50.4 2.2-110.5 33.5-146.3 75.5-28.5 32.4-54.5 84-54.5 135.6 0 7.8 1.3 15.6 2.2 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.3-70.5z"
      />
    </svg>
  )
}

export function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div className="auth-page">
      <Link className="auth-page__back" to="/">
        ← Back to home
      </Link>

      <div className="auth-card">
        <div className="auth-card__mark">
          <MasjidMark />
        </div>
        <h1 className="auth-card__title">Noor Masjid</h1>
        <p className="auth-card__subtitle">
          Join the Ummah today and stay connected with your local mosque.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <AuthTextField
            id="signup-name"
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            icon={<User size={18} strokeWidth={2} />}
          />

          <AuthTextField
            id="signup-email"
            label="Email Address"
            name="email"
            type="email"
            placeholder="name@example.com"
            autoComplete="email"
            icon={<Mail size={18} strokeWidth={2} />}
          />

          <AuthTextField
            id="signup-password"
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a strong password"
            autoComplete="new-password"
            icon={<Lock size={18} strokeWidth={2} />}
            right={
              <button
                type="button"
                className="auth-field__action"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff size={18} strokeWidth={2} />
                ) : (
                  <Eye size={18} strokeWidth={2} />
                )}
              </button>
            }
          />

          <AuthTextField
            id="signup-password-confirm"
            label="Confirm Password"
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            placeholder="Repeat your password"
            autoComplete="new-password"
            icon={<ShieldCheck size={18} strokeWidth={2} />}
          />

          <Button type="submit" variant="primary" className="auth-submit">
            Create Account
          </Button>
        </form>

        <div className="auth-divider" role="presentation">
          OR
        </div>

        <div className="auth-social">
          <button type="button" className="auth-social__btn">
            <GoogleGlyph />
            Google
          </button>
          <button type="button" className="auth-social__btn">
            <AppleGlyph />
            Apple
          </button>
        </div>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  )
}
