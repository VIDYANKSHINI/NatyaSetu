"use client"

import { Search, Eye, Ticket, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search Events",
    description: "Use our powerful search to find theatre events by location, language, genre, or date.",
    color: "from-primary to-primary/80",
  },
  {
    number: "02",
    icon: Eye,
    title: "Explore Details",
    description: "View comprehensive event information including cast, synopsis, venue, and reviews.",
    color: "from-accent to-accent/80",
  },
  {
    number: "03",
    icon: Ticket,
    title: "Book & Attend",
    description: "Get directions to the venue or book tickets directly. Never miss a performance.",
    color: "from-secondary to-secondary/80",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-muted/50 rounded-full blur-[150px] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Finding and attending theatre performances has never been easier
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Arrow (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-20 -right-3 z-20">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  </div>
                </div>
              )}
              
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full">
                {/* Step Number Badge */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} text-primary-foreground font-bold text-lg mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-500">
                  <step.icon className="h-9 w-9 text-primary" />
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
