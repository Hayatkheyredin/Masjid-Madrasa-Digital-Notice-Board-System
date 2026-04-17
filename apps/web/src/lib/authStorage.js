/**
 * Demo auth persistence until a real backend exists.
 * Passwords are stored in plain text in localStorage — replace with API + tokens in production.
 */
const USERS_KEY = 'nejashi_web_users'
const SESSION_KEY = 'nejashi_web_session'

function readUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function findUserByEmail(email) {
  const normalized = email.trim().toLowerCase()
  return readUsers().find((u) => u.email === normalized) ?? null
}

export function registerUser({ email, fullName, password }) {
  const normalized = email.trim().toLowerCase()
  if (findUserByEmail(normalized)) {
    return { ok: false, error: 'An account with this email already exists.' }
  }
  const users = readUsers()
  users.push({
    email: normalized,
    fullName: fullName.trim(),
    password,
  })
  writeUsers(users)
  return { ok: true }
}

export function verifyCredentials(email, password) {
  const user = findUserByEmail(email)
  if (!user || user.password !== password) {
    return { ok: false, error: 'Invalid email or password.' }
  }
  return { ok: true, user: { email: user.email, fullName: user.fullName } }
}

export function setSession(user) {
  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({ email: user.email, fullName: user.fullName }),
  )
}

export function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (data && typeof data.email === 'string') return data
    return null
  } catch {
    return null
  }
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY)
}
