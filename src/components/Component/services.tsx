import { Card, CardContent } from "@/components/ui/card"
import { Flower, Camera, Music, Utensils, MapPin, Sparkles } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: MapPin,
      title: "Sélection du Lieu",
      description: "Nous vous aidons à trouver le lieu parfait qui correspond à vos rêves et votre budget.",
    },
    {
      icon: Flower,
      title: "Décoration Florale",
      description: "Créations florales champêtres avec des fleurs de saison et des éléments naturels.",
    },
    {
      icon: Utensils,
      title: "Traiteur & Menu",
      description: "Sélection de traiteurs locaux proposant une cuisine authentique et savoureuse.",
    },
    {
      icon: Camera,
      title: "Photographie",
      description: "Photographes spécialisés dans les mariages champêtres pour immortaliser vos moments.",
    },
    {
      icon: Music,
      title: "Animation Musicale",
      description: "Musiciens et DJ adaptés à l'ambiance champêtre de votre célébration.",
    },
    {
      icon: Sparkles,
      title: "Coordination Jour J",
      description: "Coordination complète le jour de votre mariage pour une célébration sans stress.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Nos Services</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              De la planification à la réalisation, nous vous accompagnons à chaque étape pour créer le mariage
              champêtre de vos rêves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-serif text-stone-800 mb-3">{service.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
