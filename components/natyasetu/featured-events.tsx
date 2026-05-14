"use client"

import { useState } from "react"
import { Calendar, MapPin, Clock, ArrowRight, Sparkles, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { events, type Event } from "@/lib/search-data"
import { EventDetailModal } from "./event-detail-modal"

export function FeaturedEvents() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const featured = events.slice(0, 4)

  return (
    <>
      <section id="events" className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 animate-in fade-in slide-in-from-left duration-500">
                <Sparkles className="h-4 w-4" />
                Featured Events
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 text-balance">
                Upcoming Performances
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Don&apos;t miss these exciting theatre events happening near you
              </p>
            </div>
            <Button variant="outline" className="rounded-full group self-start md:self-auto border-border hover:border-primary hover:bg-primary/5 transition-all duration-300">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((event, index) => (
              <article
                key={event.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                      {event.language}
                    </Badge>
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {event.genre}
                    </Badge>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground font-bold">
                      From Rs. 299
                    </Badge>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-serif font-bold text-background text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-background/75">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-accent" />
                        <span>{event.location.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-accent" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-accent" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                    {event.description}
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full rounded-xl hover:border-primary hover:bg-primary/5 group/btn"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <EventDetailModal 
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  )
}
