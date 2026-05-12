"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Theater, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-background/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />

      {/* Stage Light Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-gradient-to-b from-accent/15 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-8 border border-primary-foreground/20">
          <Theater className="h-10 w-10 text-primary-foreground" />
        </div>
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-8 border border-accent/30">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm font-semibold text-accent">Join 10,000+ Theatre Lovers</span>
        </div>
        
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
          Ready to Experience the Magic of Theatre?
        </h2>
        
        <p className="text-primary-foreground/75 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
          Join thousands of theatre enthusiasts discovering amazing performances every day. 
          Your next unforgettable experience is just a click away.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 rounded-full shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-1 group"
          >
            Start Exploring
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 text-lg px-10 py-7 rounded-full transition-all duration-300"
          >
            List Your Event
          </Button>
        </div>
      </div>
    </section>
  )
}
