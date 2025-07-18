"use client"

import { useState } from "react"
import { Menu, X, Heart } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Fonction pour faire un scroll smooth vers un ID
  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMenuOpen(false) // Ferme le menu mobile après clic
    }
  }

  const links = [
    { label: "Accueil", id: "accueil" },
    { label: "Notre Histoire", id: "notre-histoire" },
    { label: "Le Mariage", id: "mariage" },
    { label: "Photos", id: "galerie" },
    { label: "RSVP", id: "rsvp" },
    { label: "Infos Pratiques", id: "infos" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-stone-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-rose-400" />
            <span className="text-xl font-serif text-stone-800">Marie & Pierre</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToId(link.id)}
                className="text-stone-700 hover:text-rose-500 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-stone-200 pt-4">
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToId(link.id)}
                  className="text-stone-700 hover:text-rose-500 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
