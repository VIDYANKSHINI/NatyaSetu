"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type User = {
  id: string
  name: string
  email: string
  avatar?: string
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  showAuthModal: boolean
  authMode: "login" | "signup"
  openAuthModal: (mode?: "login" | "signup") => void
  closeAuthModal: () => void
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  loginWithGoogle: () => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")

  const openAuthModal = useCallback((mode: "login" | "signup" = "login") => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }, [])

  const closeAuthModal = useCallback(() => {
    setShowAuthModal(false)
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      id: "1",
      name: email.split("@")[0],
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    })
    setShowAuthModal(false)
  }, [])

  const signup = useCallback(async (name: string, email: string, password: string) => {
    // Simulate signup
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      id: "1",
      name,
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    })
    setShowAuthModal(false)
  }, [])

  const loginWithGoogle = useCallback(async () => {
    // Simulate Google login
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      id: "google",
      name: "Vidyankshini",
      email: "vidyankshini@gmail.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=google",
    })
    setShowAuthModal(false)
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        showAuthModal,
        authMode,
        openAuthModal,
        closeAuthModal,
        login,
        signup,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
