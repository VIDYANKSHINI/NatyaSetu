"use client"

import { useState } from "react"
import { X, MapPin, Users, Star, Globe, Calendar, Award, Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"
import type { Artist } from "@/lib/search-data"

type ArtistProfileModalProps = {
  artist: Artist | null
  isOpen: boolean
  onClose: () => void
}

export function ArtistProfileModal({ artist, isOpen, onClose }: ArtistProfileModalProps) {
  const { isAuthenticated, openAuthModal } = useAuth()
  const [isFollowing, setIsFollowing] = useState(false)

  if (!isOpen || !artist) return null

  const handleFollow = () => {
    if (!isAuthenticated) {
      openAuthModal("signup")
      return
    }
    setIsFollowing(!isFollowing)
  }

  // Sample upcoming shows
  const upcomingShows = [
    { title: "Natsamrat Revival", date: "15 Apr 2026", venue: "NCPA Mumbai" },
    { title: "New Production", date: "28 Apr 2026", venue: "Prithvi Theatre" },
  ]

  // Sample achievements
  const achievements = [
    "Maharashtra State Drama Award 2024",
    "Best Theatre Group - Zee Theatre Awards",
    "Featured at National Theatre Festival",
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative">
        {/* Modal content goes here */}
      </div>
    </div>
  )