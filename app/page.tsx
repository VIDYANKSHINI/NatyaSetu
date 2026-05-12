"use client"

import { useState } from "react"
import { AuthProvider } from "@/lib/auth-context"
import { Header } from "@/components/natyasetu/header"
import { HeroSection } from "@/components/natyasetu/hero-section"
import { SearchSection } from "@/components/natyasetu/search-section"
import { SearchResults } from "@/components/natyasetu/search-results"
import { FeaturedEvents } from "@/components/natyasetu/featured-events"
import { ArtistsSection } from "@/components/natyasetu/artists-section"
import { WhySection } from "@/components/natyasetu/why-section"
import { HowItWorks } from "@/components/natyasetu/how-it-works"
import { Testimonials } from "@/components/natyasetu/testimonials"
import { CTASection } from "@/components/natyasetu/cta-section"
import { Footer } from "@/components/natyasetu/footer"
import { AuthModal } from "@/components/natyasetu/auth-modal"
import { searchAll, type SearchFilters } from "@/lib/search-data"

const emptyFilters: SearchFilters = { query: "", city: "", language: "", genre: "" }

function HomeContent() {
  const [filters, setFilters] = useState<SearchFilters>(emptyFilters)
  const results = searchAll(filters)
  const isSearching = !!(filters.query || (filters.city && filters.city !== "all") || (filters.language && filters.language !== "all") || (filters.genre && filters.genre !== "all"))

  function handleSearch(f: SearchFilters) {
    const cleaned: SearchFilters = {
      query: f.query,
      city: f.city === "all" ? "" : f.city,
      language: f.language === "all" ? "" : f.language,
      genre: f.genre === "all" ? "" : f.genre,
    }
    setFilters(cleaned)
  }

  function handleClear() {
    setFilters(emptyFilters)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <Header />
      <HeroSection />
      <SearchSection onSearch={handleSearch} />
      {isSearching ? (
        <SearchResults
          events={results.events}
          artists={results.artists}
          filters={filters}
          onClear={handleClear}
        />
      ) : (
        <>
          <FeaturedEvents />
          <ArtistsSection />
          <WhySection />
          <HowItWorks />
          <Testimonials />
          <CTASection />
        </>
      )}
      <Footer />
      <AuthModal />
    </>
  )
}

export default function Home() {
  return (
    <AuthProvider>
      <main className="min-h-screen">
        <HomeContent />
      </main>
    </AuthProvider>
  )
}
