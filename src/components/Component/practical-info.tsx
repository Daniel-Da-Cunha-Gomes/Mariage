import { Card, CardContent } from "@/components/Component/ui/card"
import { MapPin, Car, Bed, Gift, Camera, Music } from "lucide-react"

export function PracticalInfo() {
  return (
    <section id="infos" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Infos Pratiques</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Toutes les informations utiles pour que votre venue se passe dans les meilleures conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-stone-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="h-6 w-6 text-rose-500" />
                  <h3 className="text-xl font-serif text-stone-800">Transport</h3>
                </div>
                <div className="space-y-3 text-stone-600">
                  <p>
                    <strong>En voiture :</strong> Parking gratuit sur place (200 places)
                  </p>
                  <p>
                    <strong>En train :</strong> Gare de Malmaison (15min à pied)
                  </p>
                  <p>
                    <strong>Navette :</strong> Service navette depuis la gare à 13h30 et 16h30
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Bed className="h-6 w-6 text-rose-500" />
                  <h3 className="text-xl font-serif text-stone-800">Hébergement</h3>
                </div>
                <div className="space-y-3 text-stone-600">
                  <p>
                    <strong>Hôtel du Château :</strong> 5min à pied, tarif préférentiel
                  </p>
                  <p>
                    <strong>Gîtes ruraux :</strong> Plusieurs options dans un rayon de 10km
                  </p>
                  <p>
                    <strong>Camping :</strong> Camping municipal à 3km
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-rose-500" />
                  <h3 className="text-xl font-serif text-stone-800">Adresses</h3>
                </div>
                <div className="space-y-3 text-stone-600 text-sm">
                  <p>
                    <strong>Mairie :</strong> Place de la République, Malmaison
                  </p>
                  <p>
                    <strong>Église :</strong> Rue Saint-Pierre, Malmaison
                  </p>
                  <p>
                    <strong>Château :</strong> 123 Route de la Campagne, Malmaison
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Camera className="h-6 w-6 text-rose-500" />
                  <h3 className="text-xl font-serif text-stone-800">Photos</h3>
                </div>
                <div className="space-y-3 text-stone-600">
                  <p>Photographe professionnel présent toute la journée</p>
                  <p>
                    <strong>Hashtag :</strong> #MariePierreWedding2024
                  </p>
                  <p>Partagez vos photos sur les réseaux sociaux !</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Music className="h-6 w-6 text-rose-500" />
                  <h3 className="text-xl font-serif text-stone-800">Ambiance</h3>
                </div>
                <div className="space-y-3 text-stone-600">
                  <p>
                    <strong>Cérémonie :</strong> Musique acoustique
                  </p>
                  <p>
                    <strong>Cocktail :</strong> Jazz manouche
                  </p>
                  <p>
                    <strong>Soirée :</strong> DJ + piste de danse
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Gift className="h-6 w-6 text-rose-500" />
                  <h3 className="text-xl font-serif text-stone-800">Dress Code</h3>
                </div>
                <div className="space-y-3 text-stone-600">
                  <p>
                    <strong>Style :</strong> Chic champêtre
                  </p>
                  <p>
                    <strong>Couleurs :</strong> Tons naturels, éviter le blanc
                  </p>
                  <p>
                    <strong>Chaussures :</strong> Éviter les talons aiguilles (pelouse)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-serif text-stone-800 mb-6 text-center">Plan d'accès</h3>
            <div className="rounded-lg overflow-hidden">
              <iframe
                title="Carte du lieu"
                className="w-full h-64 border-0"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps?q=Château+de+Malmaison,+123+Route+de+la+Campagne,+78000+Malmaison&output=embed"
              ></iframe>
            </div>


            <div className="mt-4 text-center">
              <p className="text-stone-600">
                <strong>Adresse GPS :</strong> 123 Route de la Campagne, 78000 Malmaison
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
