import { Card, CardContent } from "@/components/Component/ui/card"
import { MapPin, Camera, Music, Utensils, Heart } from "lucide-react"
import chateau from "@/assets/wedding-details/chateau.webp"

export function WeddingDetails() {
  const schedule = [
    {
      time: "14h00",
      event: "Cérémonie civile",
      location: "Mairie de Malmaison",
      icon: Heart,
    },
    {
      time: "15h30",
      event: "Cérémonie religieuse",
      location: "Église Saint-Pierre",
      icon: Heart,
    },
    {
      time: "17h00",
      event: "Cocktail & Photos",
      location: "Jardins du Château",
      icon: Camera,
    },
    {
      time: "19h30",
      event: "Dîner de mariage",
      location: "Grande salle du Château",
      icon: Utensils,
    },
    {
      time: "22h00",
      event: "Ouverture du bal",
      location: "Terrasse du Château",
      icon: Music,
    },
  ]

  return (
    <section id="mariage" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Le Programme</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Voici le déroulement de notre journée de mariage. Nous avons hâte de partager ces moments avec vous !
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif text-stone-800 mb-8">Planning de la journée</h3>
              <div className="space-y-6">
                {schedule.map((item, index) => (
                  <Card key={index} className="border-stone-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-6 w-6 text-rose-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-lg font-semibold text-stone-800">{item.time}</span>
                            <span className="text-stone-400">•</span>
                            <span className="text-lg font-serif text-stone-800">{item.event}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-stone-600">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-stone-800 mb-8">Le Lieu</h3>
              <Card className="border-stone-200 mb-6">
                <CardContent className="p-0">
                  <img
                    src={chateau}
                    alt="Château de Malmaison"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-serif text-stone-800 mb-3">Château de Malmaison</h4>
                    <div className="flex items-start space-x-2 text-stone-600 mb-4">
                      <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>123 Route de la Campagne, 78000 Malmaison</span>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      Un magnifique château du XVIIIe siècle entouré de jardins à la française et de vignobles. Le cadre
                      parfait pour notre mariage champêtre avec ses pierres anciennes et sa nature préservée.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-stone-50 p-6 rounded-lg">
                <h4 className="text-lg font-serif text-stone-800 mb-3">Informations importantes</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>• Parking gratuit disponible sur place</li>
                  <li>• Lieu accessible aux personnes à mobilité réduite</li>
                  <li>• Cérémonie en extérieur (repli en salle si pluie)</li>
                  <li>• Dress code : Tenue de ville, éviter les talons aiguilles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
