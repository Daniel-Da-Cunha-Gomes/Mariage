import { Heart, Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-200 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-6 w-6 text-rose-400" />
            <span className="text-2xl font-serif">Marie & Pierre</span>
            <Heart className="h-6 w-6 text-rose-400" />
          </div>

          <p className="text-stone-400 mb-6 max-w-2xl mx-auto">
            Merci de partager ce moment magique avec nous. Votre amour et votre soutien rendent ce jour encore plus
            spécial.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-stone-400 hover:text-rose-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-stone-400 hover:text-rose-400 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="mailto:marie.pierre.mariage@email.com"
              className="text-stone-400 hover:text-rose-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="border-t border-stone-700 pt-6">
            <p className="text-stone-400 text-sm">15 Juin 2024 • Château de Malmaison • #MariePierreWedding2024</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
