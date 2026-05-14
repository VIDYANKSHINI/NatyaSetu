"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Theater, ChevronDown, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/lib/auth-context"

const navLinks = [
  { href: "#events", label: "Events" },
  { href: "#artists", label: "Artists" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#about", label: "About" },
]

const exploreLinks = [
  { href: "#", label: "Marathi Plays" },
  { href: "#", label: "Hindi Theatre" },
  { href: "#", label: "Street Performances" },
  { href: "#", label: "College Events" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, isAuthenticated, openAuthModal, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className={`p-2 rounded-lg transition-all duration-300 ${scrolled ? "bg-primary/10" : "bg-background/10"}`}>
              <Theater className={`h-6 w-6 transition-colors duration-300 ${scrolled ? "text-primary" : "text-background"}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xl font-bold transition-colors duration-300 ${scrolled ? "text-foreground" : "text-background"}`}>
                NatyaSetu
              </span>
              <span className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-background/60"}`}>
                Theatre Discovery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  scrolled 
                    ? "text-muted-foreground hover:text-primary hover:bg-muted" 
                    : "text-background/80 hover:text-background hover:bg-background/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  scrolled 
                    ? "text-muted-foreground hover:text-primary hover:bg-muted" 
                    : "text-background/80 hover:text-background hover:bg-background/10"
                }`}>
                  Explore
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {exploreLinks.map((link) => (
                  <DropdownMenuItem key={link.label} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 p-1.5 rounded-full hover:bg-muted/50 transition-colors">
                    <img
                      src={user?.avatar}
                      alt={user?.name}
                      className="w-9 h-9 rounded-full ring-2 ring-primary/20"
                    />
                    <span className={`font-medium ${scrolled ? "text-foreground" : "text-background"}`}>
                      {user?.name}
                    </span>
                    <ChevronDown className={`h-4 w-4 ${scrolled ? "text-muted-foreground" : "text-background/60"}`} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-3 py-2">
                    <p className="font-medium text-foreground">{user?.name}</p>
                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>My Bookings</DropdownMenuItem>
                  <DropdownMenuItem>Saved Events</DropdownMenuItem>
                  <DropdownMenuItem>Following</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className={`transition-colors duration-300 ${
                    scrolled 
                      ? "text-foreground hover:bg-muted" 
                      : "text-background hover:bg-background/10"
                  }`}
                  onClick={() => openAuthModal("login")}
                >
                  Sign In
                </Button>
                <Button 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => openAuthModal("signup")}
                >
                  List Your Event
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2.5 rounded-lg transition-colors duration-300 ${
              scrolled 
                ? "text-foreground hover:bg-muted" 
                : "text-background hover:bg-background/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background rounded-b-2xl shadow-xl animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-1 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary hover:bg-muted px-4 py-3 rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Explore
              </p>
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary hover:bg-muted px-4 py-2.5 rounded-lg transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border px-2">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center gap-3 px-2 py-2">
                      <img
                        src={user?.avatar}
                        alt={user?.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-foreground">{user?.name}</p>
                        <p className="text-sm text-muted-foreground">{user?.email}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="justify-center" onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      className="justify-center"
                      onClick={() => {
                        openAuthModal("login")
                        setIsOpen(false)
                      }}
                    >
                      Sign In
                    </Button>
                    <Button 
                      className="bg-accent text-accent-foreground justify-center"
                      onClick={() => {
                        openAuthModal("signup")
                        setIsOpen(false)
                      }}
                    >
                      List Your Event
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
