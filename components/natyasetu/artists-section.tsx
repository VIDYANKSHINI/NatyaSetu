"use client"

import { useState } from "react"
import { Users, ArrowRight, Star, MapPin, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { artists, type Artist } from "@/lib/search-data"
import { ArtistProfileModal } from "./artist-profile-modal"
import { useAuth } from "@/lib/auth-context"

export function ArtistsSection() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const { isAuthenticated, openAuthModal } = useAuth()
  const [followingIds, setFollowingIds] = useState<Set<number>>(new Set())

  const handleFollow = (artistId: number) => {
    if (!isAuthenticated) {
      openAuthModal("signup")
      return
    }
    setFollowingIds(prev => {
      const newSet = new Set(prev)
      if (newSet.has(artistId)) {
        newSet.delete(artistId)
      } else {
        newSet.add(artistId)
      }
      return newSet
    })
  }