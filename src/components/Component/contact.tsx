import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Contactez-nous</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Prêts à planifier votre mariage champêtre ? Contactez-nous pour une consultation gratuite et commençons à
              créer le jour le plus beau de votre vie.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-stone-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif text-stone-800 mb-6">Demande de Devis</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="Prénom" className="border-stone-300" />
                      <Input placeholder="Nom" className="border-stone-300" />
                    </div>
                    <Input placeholder="Email" type="email" className="border-stone-300" />
                    <Input placeholder="Téléphone" type="tel" className="border-stone-300" />
                    <Input placeholder="Date souhaitée du mariage" type="date" className="border-stone-300" />
                    <Input placeholder="Nombre d'invités approximatif" type="number" className="border-stone-300" />
                    <Textarea
                      placeholder="Décrivez-nous votre vision du mariage parfait..."
                      className="border-stone-300 min-h-32"
                    />
                    <Button className="w-full bg-rose-400 hover:bg-rose-500 text-white">Envoyer la demande</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-stone-800 mb-6">Informations de Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-rose-500" />
                    <span className="text-stone-700">+33 1 23 45 67 89</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-rose-500" />
                    <span className="text-stone-700">contact@mariagechampetre.fr</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-rose-500" />
                    <span className="text-stone-700">123 Rue de la Campagne, 75000 Paris</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-rose-500" />
                    <span className="text-stone-700">Lun-Ven: 9h-18h, Sam: 10h-16h</span>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 p-6 rounded-lg">
                <h4 className="text-lg font-serif text-stone-800 mb-3">Consultation Gratuite</h4>
                <p className="text-stone-600 mb-4">
                  Nous offrons une première consultation gratuite de 30 minutes pour discuter de vos rêves et de vos
                  besoins pour votre mariage champêtre.
                </p>
                <Button variant="outline" className="border-rose-400 text-rose-500 hover:bg-rose-50 bg-transparent">
                  Réserver un rendez-vous
                </Button>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg">
                <h4 className="text-lg font-serif text-stone-800 mb-3">Forfaits Disponibles</h4>
                <ul className="text-stone-600 space-y-2">
                  <li>• Forfait Essentiel - À partir de 2 500€</li>
                  <li>• Forfait Complet - À partir de 4 500€</li>
                  <li>• Forfait Premium - À partir de 7 500€</li>
                  <li>• Coordination Jour J uniquement - À partir de 800€</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
