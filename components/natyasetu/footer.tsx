"use client"

import Link from "next/link"
import { Theater, Facebook, Instagram, Twitter, Youtube, Mail, ArrowRight, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  explore: [
    { label: "Browse Events", href: "#events" },
    { label: "Artists & Groups", href: "#artists" },
    { label: "Venues", href: "#" },
    { label: "Genres", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "List Your Event", href: "#" },
    { label: "Partner With Us", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer id="about" className="bg-foreground relative overflow-hidden">
      {/* Top Border Accent */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

      {/* Newsletter Section */}
      <div className="py-16 border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl p-8 md:p-12 border border-background/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-4">
                  NEWSLETTER
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-background mb-3">
                  Stay Updated
                </h3>
                <p className="text-background/65 leading-relaxed">
                  Get the latest theatre events and exclusive offers delivered to your inbox
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-background/40" />
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/40 h-14 pl-12 rounded-xl focus:bg-background/15 focus:border-accent transition-all"
                  />
                </div>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-6 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all group">
                  Subscribe
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2.5 mb-5">
                <div className="p-2 rounded-lg bg-accent/15">
                  <Theater className="h-6 w-6 text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold text-background">NatyaSetu</span>
                  <span className="text-[10px] tracking-widest uppercase text-background/40">Theatre Discovery</span>
                </div>
              </Link>
              <p className="text-background/55 text-sm mb-6 leading-relaxed max-w-xs">
                Bridging theatre and audience across India. Discover, connect, and experience the magic of live performances.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-background/55">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-background/55">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>+91 98765 43210</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center hover:bg-accent/20 transition-all duration-300 group border border-background/10 hover:border-accent/30"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-background/60 group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-semibold text-background mb-5 text-sm tracking-wider uppercase">Explore</h4>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-background/55 hover:text-accent transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-background mb-5 text-sm tracking-wider uppercase">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-background/55 hover:text-accent transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-background mb-5 text-sm tracking-wider uppercase">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-background/55 hover:text-accent transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-background mb-5 text-sm tracking-wider uppercase">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-background/55 hover:text-accent transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/40 text-sm">
              © 2026 NatyaSetu. All rights reserved.
            </p>
            <p className="text-background/40 text-sm flex items-center gap-1.5">
              Made with <span className="text-accent">♥</span> for Indian Theatre
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
