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
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-card rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors z-10"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Header with gradient background */}
          <div className="relative h-40 bg-gradient-to-br from-primary via-primary/80 to-accent">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
          </div>

          {/* Profile Info */}
          <div className="relative px-6 md:px-8 pb-6">
            {/* Avatar */}
            <div className="relative -mt-16 mb-4">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-32 h-32 rounded-2xl object-cover ring-4 ring-card shadow-xl"
              />
              {Number(artist.followers.replace(/[^0-9.]/g, '')) > 5 && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <Star className="h-4 w-4 text-accent-foreground fill-current" />
                </div>
              )}
            </div>

            {/* Name & Type */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-card-foreground mb-2">
                  {artist.name}
                </h2>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="text-sm">
                    {artist.artistType}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{artist.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <Users className="h-4 w-4" />
                    <span>{artist.followers} followers</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={handleFollow}
                  className={`rounded-xl font-semibold px-6 ${
                    isFollowing 
                      ? "bg-muted text-muted-foreground hover:bg-muted/80" 
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
              <h3 className="font-semibold text-card-foreground mb-2">About</h3>
              <p className="text-muted-foreground leading-relaxed">
                {artist.bio}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                With a passion for bringing stories to life on stage, this talented artist has been 
                captivating audiences across India with powerful performances and innovative productions 
                that blend tradition with contemporary storytelling.
              </p>
            </div>

            {/* Languages */}
            <div className="mb-8">
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {artist.languages.map((lang) => (
                  <Badge key={lang} variant="outline" className="rounded-full px-4 py-1">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Achievements
              </h3>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-muted/30 rounded-xl p-3"
                  >
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Star className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-card-foreground text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Shows */}
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Shows
              </h3>
              <div className="grid gap-3">
                {upcomingShows.map((show, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Play className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">{show.title}</p>
                        <p className="text-sm text-muted-foreground">{show.date} | {show.venue}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="rounded-lg">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
