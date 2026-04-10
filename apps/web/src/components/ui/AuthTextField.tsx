import type { InputHTMLAttributes, ReactNode } from 'react'

export type AuthTextFieldProps = {
  id: string
  label: string
  icon: ReactNode
  right?: ReactNode
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>

export function AuthTextField({
  id,
  label,
  icon,
  right,
  ...inputProps
}: AuthTextFieldProps) {
  return (
    <div className="auth-field">
      <label className="auth-field__label" htmlFor={id}>
        {label}
      </label>
      <div className="auth-field__wrap">
        <span className="auth-field__icon">{icon}</span>
        <input id={id} className="auth-field__input" {...inputProps} />
        {right}
      </div>
    </div>
  )
}
