import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Marie & Pierre",
      text: "Un mariage absolument magique ! L'équipe a su créer l'ambiance champêtre parfaite que nous souhaitions. Chaque détail était pensé avec soin.",
      rating: 5,
    },
    {
      name: "Sophie & Thomas",
      text: "Professionnalisme et créativité au rendez-vous. Notre mariage était exactement comme nous l'avions rêvé, dans un cadre naturel exceptionnel.",
      rating: 5,
    },
    {
      name: "Julie & Antoine",
      text: "Une organisation parfaite du début à la fin. Nous avons pu profiter pleinement de notre jour J grâce à leur expertise et leur bienveillance.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Témoignages</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Découvrez ce que nos couples disent de leur expérience avec nous.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-serif text-stone-800 font-medium">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
