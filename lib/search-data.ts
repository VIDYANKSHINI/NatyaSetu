export type Event = {
  id: number
  type: "event"
  title: string
  description: string
  location: string
  city: string
  date: string
  time: string
  language: string
  genre: string
  image: string
  price: string
}

export type Artist = {
  id: number
  type: "artist"
  name: string
  artistType: string
  bio: string
  image: string
  followers: string
  languages: string[]
  city: string
}

export const events: Event[] = [
  {
    id: 1,
    type: "event",
    title: "Natsamrat",
    description: "A powerful tale of an aging actor's struggle with fame and family. A must-watch Marathi classic.",
    location: "Yashwantrao Chavan Natyagruha, Mumbai",
    city: "Mumbai",
    date: "15 Apr 2026",
    time: "7:00 PM",
    language: "Marathi",
    genre: "Drama",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
    price: "Rs. 499",
  },
  {
    id: 2,
    type: "event",
    title: "Jar Tar Chi Goshta",
    description: "A contemporary take on relationships and the 'ifs and buts' of life. A critically acclaimed modern Marathi drama.",
    location: "Ram Krishna More Auditorium, Pune",
    city: "Pune",
    date: "28 Mar 2026 onwards",
    time: "Varies",
    language: "Marathi",
    genre: "Drama",
    image: "https://images.unsplash.com/photo-1503095396549-807059418b0e?w=800&q=80",
    price: "Rs. 400",
  },
  {
    id: 3,
    type: "event",
    title: "Comedy of Errors",
    description: "A hilarious adaptation of Shakespeare's classic comedy with an Indian twist.",
    location: "Prithvi Theatre, Mumbai",
    city: "Mumbai",
    date: "20 Apr 2026",
    time: "8:00 PM",
    language: "English",
    genre: "Comedy",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80",
    price: "Rs. 599",
  },
  {
    id: 4,
    type: "event",
    title: "Moruchi Mavshi",
    description: "A timeless Marathi comedy that has entertained audiences for generations.",
    location: "Bal Gandharva Rang Mandir, Pune",
    city: "Pune",
    date: "22 Apr 2026",
    time: "7:30 PM",
    language: "Marathi",
    genre: "Comedy",
    image: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800&q=80",
    price: "Rs. 299",
  },
  {
    id: 5,
    type: "event",
    title: "Shakuntala",
    description: "Kalidasa's timeless epic reimagined for the modern stage with contemporary staging.",
    location: "NCPA, Mumbai",
    city: "Mumbai",
    date: "25 Apr 2026",
    time: "7:00 PM",
    language: "Hindi",
    genre: "Drama",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&q=80",
    price: "Rs. 799",
  },
  {
    id: 6,
    type: "event",
    title: "Andha Yug",
    description: "Dharamvir Bharati's anti-war play set during the Mahabharata's final day.",
    location: "Kamani Auditorium, Delhi",
    city: "Delhi",
    date: "28 Apr 2026",
    time: "6:00 PM",
    language: "Hindi",
    genre: "Tragedy",
    image: "https://images.unsplash.com/photo-1549737221-bef65e2604a6?w=800&q=80",
    price: "Rs. 449",
  },
  {
    id: 7,
    type: "event",
    title: "Jaatra",
    description: "A vibrant Bengali folk street theatre experience celebrating rural traditions.",
    location: "Rabindra Sadan, Kolkata",
    city: "Kolkata",
    date: "30 Apr 2026",
    time: "5:30 PM",
    language: "Bengali",
    genre: "Street Theatre",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80",
    price: "Rs. 199",
  },
  {
    id: 8,
    type: "event",
    title: "Waiting for Godot",
    description: "Beckett's existential masterpiece in a bold new production by Ranga Shankara.",
    location: "Ranga Shankara, Bangalore",
    city: "Bangalore",
    date: "2 May 2026",
    time: "7:30 PM",
    language: "English",
    genre: "Experimental",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
    price: "Rs. 549",
  },
]

export const artists: Artist[] = [
  {
    id: 1,
    type: "artist",
    name: "Rangshree Theatre Group",
    artistType: "Theatre Group",
    bio: "Pioneering experimental Marathi theatre since 1985. Known for bold adaptations and original works.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
    followers: "12.5K",
    languages: ["Marathi", "Hindi"],
    city: "Mumbai",
  },
  {
    id: 2,
    type: "artist",
    name: "Priya Sharma",
    artistType: "Actor & Director",
    bio: "Award-winning theatre artist with 15+ years of experience in Hindi and Marathi theatre.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    followers: "8.2K",
    languages: ["Hindi", "Marathi"],
    city: "Pune",
  },
  {
    id: 3,
    type: "artist",
    name: "Natak Manch",
    artistType: "Theatre Group",
    bio: "Bringing contemporary stories to life through powerful performances across India.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80",
    followers: "15.8K",
    languages: ["Hindi", "English"],
    city: "Delhi",
  },
  {
    id: 4,
    type: "artist",
    name: "Vikram Deshmukh",
    artistType: "Playwright",
    bio: "Modern playwright blending traditional storytelling with contemporary themes.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    followers: "5.1K",
    languages: ["Marathi", "Hindi"],
    city: "Pune",
  },
  {
    id: 5,
    type: "artist",
    name: "Kalakaar Collective",
    artistType: "Street Theatre",
    bio: "Bringing socially relevant stories to public spaces through impactful street performances.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80",
    followers: "9.4K",
    languages: ["Hindi", "Bengali"],
    city: "Kolkata",
  },
  {
    id: 6,
    type: "artist",
    name: "Meera Kulkarni",
    artistType: "Actor",
    bio: "Versatile performer known for her powerful portrayals in both classic and modern productions.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    followers: "7.3K",
    languages: ["Marathi"],
    city: "Mumbai",
  },
]

export type SearchFilters = {
  query: string
  city: string
  language: string
  genre: string
}

export function searchAll(filters: SearchFilters): { events: Event[]; artists: Artist[] } {
  const q = filters.query.toLowerCase().trim()
  const city = filters.city
  const language = filters.language
  const genre = filters.genre

  const filteredEvents = events.filter((event) => {
    const matchesQuery =
      !q ||
      event.title.toLowerCase().includes(q) ||
      event.description.toLowerCase().includes(q) ||
      event.genre.toLowerCase().includes(q) ||
      event.language.toLowerCase().includes(q) ||
      event.location.toLowerCase().includes(q)
    const matchesCity = !city || event.city.toLowerCase() === city.toLowerCase()
    const matchesLanguage = !language || event.language.toLowerCase() === language.toLowerCase()
    const matchesGenre = !genre || event.genre.toLowerCase() === genre.toLowerCase()
    return matchesQuery && matchesCity && matchesLanguage && matchesGenre
  })

  const filteredArtists = artists.filter((artist) => {
    const matchesQuery =
      !q ||
      artist.name.toLowerCase().includes(q) ||
      artist.bio.toLowerCase().includes(q) ||
      artist.artistType.toLowerCase().includes(q) ||
      artist.languages.some((l) => l.toLowerCase().includes(q))
    const matchesCity = !city || artist.city.toLowerCase() === city.toLowerCase()
    const matchesLanguage =
      !language || artist.languages.some((l) => l.toLowerCase() === language.toLowerCase())
    return matchesQuery && matchesCity && matchesLanguage
  })

  return { events: filteredEvents, artists: filteredArtists }
}
