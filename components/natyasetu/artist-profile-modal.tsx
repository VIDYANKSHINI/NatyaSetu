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