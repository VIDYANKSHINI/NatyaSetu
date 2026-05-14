"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, MapPin, Play, Users, Calendar } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useRef, useEffect } from "react"

export function HeroSection() {
  const { openAuthModal } = useAuth()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <section className="relative h-screen min-h-screen flex items-center justify-center overflow-hidden mb-20">
      {/* Theatre Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/hero-theatre-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-foreground/60" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-transparent to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/15 backdrop-blur-sm rounded-full mb-8 border border-accent/20">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm font-semibold text-accent tracking-wide">
            Discover Live Theatre Near You
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-[1.1] tracking-tight">
          <span className="block mb-2">Experience the Magic of</span>
          <span className="relative inline-block">
            <span className="relative z-10 text-white bg-[length:200%_auto]">
              Indian Theatre
            </span>
            <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/20 -z-10 rounded" />
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-background/75 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          Connecting you to local nataks, talented artists, and unforgettable live performances. 
          From Marathi plays to street theatre — discover it all.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base md:text-lg px-8 py-6 rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-1"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Explore Events
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-background/25 text-background hover:bg-background/10 hover:border-background/40 text-base md:text-lg px-8 py-6 rounded-full transition-all duration-300 group"
            onClick={() => openAuthModal("signup")}
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Join Now
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-xl mx-auto">
          <div className="text-center group">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Calendar className="h-5 w-5 text-accent opacity-75" />
              <p className="text-3xl md:text-4xl font-bold text-accent">500+</p>
            </div>
            <p className="text-sm text-background/50 font-medium">Live Events</p>
          </div>
          <div className="text-center group">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Users className="h-5 w-5 text-accent opacity-75" />
              <p className="text-3xl md:text-4xl font-bold text-accent">200+</p>
            </div>
            <p className="text-sm text-background/50 font-medium">Artists</p>
          </div>
          <div className="text-center group">
            <div className="flex items-center justify-center gap-2 mb-1">
              <MapPin className="h-5 w-5 text-accent opacity-75" />
              <p className="text-3xl md:text-4xl font-bold text-accent">50+</p>
            </div>
            <p className="text-sm text-background/50 font-medium">Cities</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-7 h-11 border-2 border-background/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  )
}
