import { Card, CardContent } from "@/components/Component/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Heart, Home, Plane } from "lucide-react"

export function GiftRegistry() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Liste de Mariage</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Votre présence est le plus beau des cadeaux ! Si vous souhaitez nous gâter, voici quelques idées pour nous
              aider à commencer notre vie à deux.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-stone-200 text-center">
              <CardContent className="p-8">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-3">Notre Nid</h3>
                <p className="text-stone-600 mb-4">
                  Nous aménageons notre première maison ensemble. Électroménager, décoration, jardin...
                </p>
                <Button variant="outline" className="border-rose-400 text-rose-500 hover:bg-rose-50 bg-transparent">
                  Voir la liste
                </Button>
              </CardContent>
            </Card>

            <Card className="border-stone-200 text-center">
              <CardContent className="p-8">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-3">Lune de Miel</h3>
                <p className="text-stone-600 mb-4">
                  Direction le Japon pour notre voyage de noces ! Aidez-nous à réaliser ce rêve.
                </p>
                <Button variant="outline" className="border-rose-400 text-rose-500 hover:bg-rose-50 bg-transparent">
                  Contribuer
                </Button>
              </CardContent>
            </Card>

            <Card className="border-stone-200 text-center">
              <CardContent className="p-8">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-3">Expériences</h3>
                <p className="text-stone-600 mb-4">
                  Cours de cuisine, dégustation de vins, week-ends romantiques... Créons des souvenirs !
                </p>
                <Button variant="outline" className="border-rose-400 text-rose-500 hover:bg-rose-50 bg-transparent">
                  Découvrir
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-stone-50 p-8 rounded-lg">
            <div className="text-center mb-6">
              <Gift className="h-12 w-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-stone-800 mb-3">Nos Listes de Mariage</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-serif text-stone-800 mb-2">Galeries Lafayette</h4>
                <p className="text-stone-600 mb-3">Liste traditionnelle avec tous nos essentiels maison</p>
                <Button className="bg-rose-400 hover:bg-rose-500 text-white">Accéder à la liste</Button>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-serif text-stone-800 mb-2">Cagnotte en ligne</h4>
                <p className="text-stone-600 mb-3">Pour notre lune de miel et nos projets futurs</p>
                <Button className="bg-rose-400 hover:bg-rose-500 text-white">Contribuer en ligne</Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-stone-600 italic">
                "Le plus important pour nous, c'est de vous avoir à nos côtés pour célébrer ce moment unique. Votre
                présence vaut tous les cadeaux du monde !"
              </p>
              <p className="text-stone-800 font-serif mt-2">— Marie & Pierre</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
