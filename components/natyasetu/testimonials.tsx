"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Anjali Patil",
    role: "Theatre Enthusiast",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    rating: 5,
    text: "NatyaSetu has completely changed how I discover theatre. I found so many amazing local performances I would have never known about otherwise!",
    featured: true,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Theatre Artist",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    text: "As a theatre artist, this platform has helped me reach audiences beyond my usual circle. The community here truly appreciates the art form.",
    featured: false,
  },
  {
    id: 3,
    name: "Sneha Deshpande",
    role: "College Student",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "Perfect for students who want to explore theatre but don&apos;t know where to start. The event recommendations are spot on!",
    featured: false,
  },
  {
    id: 4,
    name: "Vikram Joshi",
    role: "Event Organizer",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    text: "Listing our events on NatyaSetu increased our audience by 40%. The platform&apos;s reach among theatre lovers is incredible.",
    featured: true,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            What Our Community Says
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Join thousands of theatre lovers who trust NatyaSetu for their cultural experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className={`bg-card rounded-2xl p-7 md:p-8 border border-border relative group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 ${
                testimonial.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                <Quote className="h-5 w-5 text-primary/30" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-card-foreground text-lg leading-relaxed mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-border"
                />
                <div>
                  <p className="font-semibold text-card-foreground text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} <span className="text-primary">•</span> {testimonial.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
