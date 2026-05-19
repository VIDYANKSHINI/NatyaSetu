"use client"

import { Search, MapPin, Languages, Filter, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { SearchFilters } from "@/lib/search-data"
import { useState } from "react"

const locations = ["Mumbai", "Pune", "Delhi", "Bangalore", "Kolkata", "Chennai"]
const languages = ["Marathi", "Hindi", "English", "Gujarati", "Bengali", "Tamil"]
const genres = ["Drama", "Comedy", "Musical", "Tragedy", "Street Theatre", "Experimental", "Historical"]

const quickFilters: { label: string; filter: Partial<SearchFilters>; icon?: string }[] = [
  { label: "Drama", filter: { genre: "Drama" } },
  { label: "Comedy", filter: { genre: "Comedy" } },
  { label: "Marathi", filter: { language: "Marathi" } },
  { label: "Street Theatre", filter: { genre: "Street Theatre" } },
]

type Props = {
  onSearch: (filters: SearchFilters) => void
}

export function SearchSection({ onSearch }: Props) {
  const [query, setQuery] = useState("")
  const [city, setCity] = useState("")
  const [language, setLanguage] = useState("")
  const [genre, setGenre] = useState("")

  function handleSearch() {
    onSearch({ query, city, language, genre })
    const section = document.getElementById("search-results")
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  function handleQuickFilter(filter: Partial<SearchFilters>) {
    const next: SearchFilters = {
      query: filter.query ?? "",
      city: filter.city ?? "",
      language: filter.language ?? "",
      genre: filter.genre ?? "",
    }
    setQuery(next.query)
    setCity(next.city)
    setLanguage(next.language)
    setGenre(next.genre)
    onSearch(next)
    const section = document.getElementById("search-results")
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  function handleClear() {
    setQuery("")
    setCity("")
    setLanguage("")
    setGenre("")
    onSearch({ query: "", city: "", language: "", genre: "" })
  }

  const hasFilters = query || city || language || genre

  return (
    <section id="search" className="py-12 bg-background relative -mt-16 z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl shadow-2xl shadow-foreground/5 border border-border/50 p-6 md:p-8 relative overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Filter className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-card-foreground">Find Your Next Show</h2>
                <p className="text-sm text-muted-foreground">Search events, plays, artists...</p>
              </div>
            </div>
            {hasFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="lg:col-span-5 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Search events, plays, artists..."
                className="pl-12 h-13 bg-muted/50 border-border/50 focus:bg-background focus:border-primary transition-all rounded-xl text-base"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>

            {/* Location */}
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger className="lg:col-span-2 h-13 bg-muted/50 border-border/50 focus:bg-background focus:border-primary transition-all rounded-xl">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Language */}
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="lg:col-span-2 h-13 bg-muted/50 border-border/50 focus:bg-background focus:border-primary transition-all rounded-xl">
                <Languages className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Languages</SelectItem>
                {languages.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Search Button */}
            <Button
              className="lg:col-span-3 h-13 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-base font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-all"
              onClick={handleSearch}
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mr-2">
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">Popular:</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-border/50 hover:border-primary hover:bg-primary/5 transition-all"
              onClick={() => handleQuickFilter({ city: "Mumbai" })}
            >
              <MapPin className="h-3 w-3 mr-1.5 text-primary" />
              Mumbai
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-border/50 hover:border-primary hover:bg-primary/5 transition-all"
              onClick={() => handleQuickFilter({ city: "Pune" })}
            >
              <MapPin className="h-3 w-3 mr-1.5 text-primary" />
              Pune
            </Button>
            {quickFilters.map((qf) => (
              <Button
                key={qf.label}
                variant="outline"
                size="sm"
                className="rounded-full border-border/50 hover:border-accent hover:bg-accent/5 transition-all"
                onClick={() => handleQuickFilter(qf.filter)}
              >
                {qf.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
