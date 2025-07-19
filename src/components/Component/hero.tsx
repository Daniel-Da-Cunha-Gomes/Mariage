import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import bg from "@/assets/Hero/bg.png"

export function Hero() {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-serif mb-4 leading-tight">
          Marie
          <span className="block text-rose-300">&</span>
          Pierre
        </h1>
        <p className="text-2xl md:text-3xl mb-8 font-light">Nous nous marions !</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <div className="flex items-center space-x-2 text-lg">
            <Calendar className="h-5 w-5 text-rose-300" />
            <span>15 Juin 2024</span>
          </div>
          <div className="flex items-center space-x-2 text-lg">
            <MapPin className="h-5 w-5 text-rose-300" />
            <span>Château de Malmaison</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-stone-800 hover:bg-stone-100 px-8 py-3">
            Confirmer sa présence
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-stone-800 px-8 py-3 bg-transparent"
          >
            Voir les détails
          </Button>
        </div>
      </div>
    </section>
  )
}
