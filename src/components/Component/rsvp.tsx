import { Button } from "@/components/Component/ui/button"
import { Input } from "@/components/Component/ui/input"
import { Textarea } from "@/components/Component/ui/textarea"
import { Card, CardContent } from "@/components/Component/ui/card"
import { Heart, Users, Utensils } from "lucide-react"

export function RSVP() {
  return (
    <section id="rsvp" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Confirmez votre présence</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Votre présence est le plus beau cadeau que vous puissiez nous offrir. Merci de confirmer votre
              participation avant le 1er mai 2024.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-stone-800 mb-6">Formulaire RSVP</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Prénom" className="border-stone-300" />
                    <Input placeholder="Nom" className="border-stone-300" />
                  </div>
                  <Input placeholder="Email" type="email" className="border-stone-300" />
                  <Input placeholder="Téléphone" type="tel" className="border-stone-300" />

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Nombre de personnes</label>
                    <select className="w-full p-2 border border-stone-300 rounded-md">
                      <option>1 personne</option>
                      <option>2 personnes</option>
                      <option>3 personnes</option>
                      <option>4 personnes</option>
                      <option>Plus de 4 personnes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Présence confirmée</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="attendance" value="yes" className="mr-2" />
                        Oui, je serai présent(e)
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="attendance" value="no" className="mr-2" />
                        Non, je ne pourrai pas venir
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Allergies ou régimes spéciaux
                    </label>
                    <Textarea
                      placeholder="Merci de nous indiquer vos éventuelles allergies ou régimes alimentaires..."
                      className="border-stone-300"
                    />
                  </div>

                  <Textarea placeholder="Un petit mot pour les mariés... (optionnel)" className="border-stone-300" />

                  <Button className="w-full bg-rose-400 hover:bg-rose-500 text-white">Confirmer ma présence</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-stone-800 mb-6">Informations importantes</h3>

                <Card className="border-stone-200 mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Heart className="h-6 w-6 text-rose-500" />
                      <h4 className="text-lg font-serif text-stone-800">Date limite</h4>
                    </div>
                    <p className="text-stone-600">
                      Merci de confirmer votre présence avant le <strong>1er mai 2024</strong> pour nous permettre de
                      finaliser l'organisation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-stone-200 mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Users className="h-6 w-6 text-rose-500" />
                      <h4 className="text-lg font-serif text-stone-800">Invités</h4>
                    </div>
                    <p className="text-stone-600">
                      Chaque invitation est nominative. Merci de nous contacter si vous souhaitez venir accompagné(e) et
                      que cela n'était pas prévu initialement.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Utensils className="h-6 w-6 text-rose-500" />
                      <h4 className="text-lg font-serif text-stone-800">Repas</h4>
                    </div>
                    <p className="text-stone-600">
                      Menu champêtre avec produits locaux et de saison. N'hésitez pas à nous signaler vos allergies ou
                      régimes spéciaux.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg">
                <h4 className="text-lg font-serif text-stone-800 mb-3">Contact direct</h4>
                <p className="text-stone-600 mb-4">
                  Pour toute question ou demande particulière, n'hésitez pas à nous contacter directement :
                </p>
                <div className="space-y-2 text-stone-600">
                  <p>📧 marie.pierre.mariage@email.com</p>
                  <p>📱 Marie : 06 12 34 56 78</p>
                  <p>📱 Pierre : 06 87 65 43 21</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
