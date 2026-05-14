"use client"

import { X, Calendar, MapPin, Clock, Users, Tag, Globe, Ticket, Share2, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Event } from "@/lib/search-data"

type EventDetailModalProps = {
  event: Event | null
  isOpen: boolean
  onClose: () => void
}

export function EventDetailModal({ event, isOpen, onClose }: EventDetailModalProps) {
  if (!isOpen || !event) return null

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors z-10"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero Image */}
          <div className="relative h-72 md:h-96">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
              <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                {event.language}
              </Badge>
              <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                {event.genre}
              </Badge>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-background mb-3">
                {event.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-background/80">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">About This Event</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Experience an unforgettable evening of theatre as talented artists bring this compelling story to life. 
                    This production has received critical acclaim for its powerful performances, stunning visuals, 
                    and emotionally resonant storytelling that will stay with you long after the curtain falls.
                  </p>
                </div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm font-medium">Language</span>
                    </div>
                    <p className="text-card-foreground font-semibold">{event.language}</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Tag className="h-4 w-4" />
                      <span className="text-sm font-medium">Genre</span>
                    </div>
                    <p className="text-card-foreground font-semibold">{event.genre}</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">Duration</span>
                    </div>
                    <p className="text-card-foreground font-semibold">2 hrs 30 mins</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Ticket className="h-4 w-4" />
                      <span className="text-sm font-medium">Availability</span>
                    </div>
                    <p className="text-card-foreground font-semibold">Limited Seats</p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                {/* Venue Card */}
                <div className="bg-muted/30 rounded-2xl p-5 border border-border">
                  <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Venue
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.location}
                  </p>
                  <Button variant="outline" size="sm" className="w-full mt-3 rounded-xl">
                    View on Map
                  </Button>
                </div>

                {/* Price Card */}
                <div className="bg-primary/5 rounded-2xl p-5 border border-primary/20">
                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Tickets starting from</p>
                    <p className="text-3xl font-bold text-primary">Rs. 299</p>
                  </div>
                  <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold">
                    Book Tickets
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 rounded-xl">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-xl">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
