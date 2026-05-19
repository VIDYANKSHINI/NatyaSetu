"use client"

import { Eye, Heart, Ticket, Users, Sparkles, Globe } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Discover Hidden Gems",
    description: "Find local theatre performances that often go unnoticed. From college plays to indie productions.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Support Local Artists",
    description: "Directly connect with grassroots theatre artists, helping sustain the local arts community.",
    color: "bg-accent/15 text-accent",
  },
  {
    icon: Ticket,
    title: "Easy Event Access",
    description: "Browse, discover, and attend theatre events with ease. Never miss amazing performances.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: Users,
    title: "Build Community",
    description: "Join passionate theatre lovers, share reviews, and connect over shared experiences.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sparkles,
    title: "Diverse Performances",
    description: "From Marathi nataks to experimental works — experience the full spectrum of Indian theatre.",
    color: "bg-accent/15 text-accent",
  },
  {
    icon: Globe,
    title: "Pan-India Coverage",
    description: "Discover events across major cities and towns. Theatre is everywhere, and so are we.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
]

export function WhySection() {
  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/15 text-accent text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-5">
            Why NatyaSetu?
          </h2>
          <p className="text-background/65 max-w-2xl mx-auto text-lg leading-relaxed">
            We&apos;re bridging the gap between theatre and its audience, making live performances accessible to everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-7 rounded-2xl bg-background/[0.03] border border-background/10 hover:bg-background/[0.07] hover:border-background/20 transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-xl text-background mb-3">
                {feature.title}
              </h3>
              <p className="text-background/55 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
