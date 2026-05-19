"use client"

import { useState } from "react"
import { Calendar, MapPin, Clock, Users, X, SearchX, Star, ArrowRight, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Event, Artist, SearchFilters } from "@/lib/search-data"
import { EventDetailModal } from "./event-detail-modal"
import { ArtistProfileModal } from "./artist-profile-modal"
import { useAuth } from "@/lib/auth-context"

type Props = {
  events: Event[]
  artists: Artist[]
  filters: SearchFilters
  onClear: () => void
}

export function SearchResults({ events, artists, filters, onClear }: Props) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const [followingIds, setFollowingIds] = useState<Set<number>>(new Set())
  const { isAuthenticated, openAuthModal } = useAuth()

  const totalResults = events.length + artists.length
  const hasActiveFilter = filters.query || filters.city || filters.language || filters.genre

  const activeChips = [
    filters.query && { label: `"${filters.query}"`, key: "query" },
    filters.city && filters.city !== "all" && { label: filters.city, key: "city" },
    filters.language && filters.language !== "all" && { label: filters.language, key: "language" },
    filters.genre && filters.genre !== "all" && { label: filters.genre, key: "genre" },
  ].filter(Boolean) as { label: string; key: string }[]

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

  if (!hasActiveFilter) return null

  return (
    <>
      <section id="search-results" className="py-16 bg-muted/30 relative">
        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                {totalResults > 0 ? (
                  <>
                    <span className="text-primary">{totalResults}</span> result{totalResults !== 1 ? "s" : ""} found
                  </>
                ) : (
                  "No results found"
                )}
              </h2>
              {activeChips.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="text-sm text-muted-foreground">Filtered by:</span>
                  {activeChips.map((chip) => (
                    <Badge key={chip.key} variant="secondary" className="text-xs px-3 py-1 rounded-full">
                      {chip.label}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <Button variant="outline" size="sm" onClick={onClear} className="shrink-0 rounded-full">
              <X className="h-4 w-4 mr-1.5" />
              Clear Search
            </Button>
          </div>

          {/* No Results State */}
          {totalResults === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
                <SearchX className="h-12 w-12 text-muted-foreground/50" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">No matches found</h3>
              <p className="text-muted-foreground max-w-md mb-8">
                Try adjusting your search terms or filters to find events, plays, or artists.
              </p>
              <Button className="bg-primary text-primary-foreground rounded-full px-8" onClick={onClear}>
                Show All Events
              </Button>
            </div>
          )}

          {/* Events Results */}
          {events.length > 0 && (
            <div className="mb-14">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                Events & Plays
                <Badge variant="secondary" className="ml-1">{events.length}</Badge>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {events.map((event, index) => (
                  <article
                    key={event.id}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                        <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">{event.language}</Badge>
                        <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">{event.genre}</Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-accent text-accent-foreground font-bold">From Rs. 299</Badge>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h4 className="font-serif text-lg font-bold text-background group-hover:text-accent transition-colors">
                          {event.title}
                        </h4>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary shrink-0" />
                          <span className="truncate">{event.location.split(',')[0]}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button 
                          variant="outline"
                          className="flex-1 rounded-xl hover:border-primary"
                          onClick={() => setSelectedEvent(event)}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          Details
                        </Button>
                        <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl group/btn">
                          Book
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Artists Results */}
          {artists.length > 0 && (
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                Artists & Theatre Groups
                <Badge variant="secondary" className="ml-1">{artists.length}</Badge>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {artists.map((artist, index) => (
                  <article
                    key={artist.id}
                    className="group bg-card rounded-2xl p-6 border border-border hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-16 h-16 rounded-2xl object-cover ring-2 ring-border group-hover:ring-accent/50 transition-all"
                        />
                        {Number(artist.followers.replace(/[^0-9.]/g, '')) > 5 && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                            <Star className="h-2.5 w-2.5 text-accent-foreground fill-current" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                          {artist.name}
                        </h4>
                        <Badge variant="secondary" className="mt-1 text-xs">{artist.artistType}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1.5">
                          <Users className="h-3 w-3 text-primary" />
                          <span>{artist.followers} followers</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{artist.bio}</p>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 rounded-xl hover:border-primary"
                        onClick={() => setSelectedArtist(artist)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Profile
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
          )}
        </div>
      </section>

      {/* Event Detail Modal */}
      <EventDetailModal 
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      {/* Artist Profile Modal */}
      <ArtistProfileModal 
        artist={selectedArtist}
        isOpen={!!selectedArtist}
        onClose={() => setSelectedArtist(null)}
      />
    </>
  )
}
