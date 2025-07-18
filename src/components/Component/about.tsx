import { Heart, Users, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Notre Histoire</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Spécialisés dans l'organisation de mariages champêtres, nous créons des moments inoubliables dans des
              cadres naturels exceptionnels depuis plus de 10 ans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Notre équipe"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-stone-800 mb-6">Une Passion pour l'Authentique</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Nous croyons que chaque mariage doit refléter la personnalité unique du couple. Notre approche
                personnalisée nous permet de créer des célébrations authentiques qui racontent votre histoire d'amour.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Du choix du lieu à la décoration florale, en passant par la coordination du jour J, nous nous occupons
                de chaque détail pour que vous puissiez profiter pleinement de ce moment magique.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-rose-500" />
              </div>
              <h4 className="text-xl font-serif text-stone-800 mb-2">Passion</h4>
              <p className="text-stone-600">Chaque mariage est unique et mérite une attention particulière</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-rose-500" />
              </div>
              <h4 className="text-xl font-serif text-stone-800 mb-2">Équipe</h4>
              <p className="text-stone-600">Une équipe expérimentée et dévouée à votre service</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-rose-500" />
              </div>
              <h4 className="text-xl font-serif text-stone-800 mb-2">Expérience</h4>
              <p className="text-stone-600">Plus de 200 mariages organisés avec succès</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
