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

  return (
    <>
      <section id="artists" className="py-24 bg-muted/40 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        {/* Animated background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4 animate-in fade-in slide-in-from-left duration-500">
                <Users className="h-4 w-4" />
                Meet the Artists
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 text-balance">
                Artists & Theatre Groups
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Connect with talented performers and renowned theatre companies
              </p>
            </div>
            <Button variant="outline" className="rounded-full group self-start md:self-auto border-border hover:border-accent hover:bg-accent/5 transition-all duration-300">
              Discover More Artists
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Artists Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map((artist, index) => (
              <article
                key={artist.id}
                className={`group bg-card rounded-2xl p-6 border border-border hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-500 ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-18 h-18 rounded-2xl object-cover ring-2 ring-border group-hover:ring-accent/50 transition-all duration-300"
                    />
                    {Number(artist.followers.replace(/[^0-9.]/g, '')) > 5 && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-pulse">
                        <Star className="h-3 w-3 text-accent-foreground fill-current" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-bold text-lg text-card-foreground group-hover:text-primary transition-colors">
                      {artist.name}
                    </h3>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {artist.artistType}
                    </Badge>
                    <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5 text-primary" />
                        <span className="font-medium">{artist.followers}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        <span>{artist.city}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-5 leading-relaxed">
                  {artist.bio}
                </p>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 rounded-xl hover:border-primary transition-all duration-300"
                    onClick={() => setSelectedArtist(artist)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Profile
                  </Button>
                  <Button 
                    size="sm" 
                    className={`flex-1 rounded-xl transition-all duration-300 ${
                      followingIds.has(artist.id)
                        ? "bg-muted text-muted-foreground hover:bg-muted/80"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                    onClick={() => handleFollow(artist.id)}
                  >
                    {followingIds.has(artist.id) ? "Following" : "Follow"}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Profile Modal */}
      <ArtistProfileModal 
        artist={selectedArtist}
        isOpen={!!selectedArtist}
        onClose={() => setSelectedArtist(null)}
      />
    </>
  )
}
