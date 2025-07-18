"use client"
import { useState } from "react"
import img1 from "@/assets/gallery/1.png"
import img2 from "@/assets/gallery/2.png"
import img3 from "@/assets/gallery/3.webp"
import img4 from "@/assets/gallery/4.png"
import img5 from "@/assets/gallery/5.png"
import img6 from "@/assets/gallery/6.png"
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
  {
    src: img1,
    alt: "Photos de fiançailles",
  },
  {
    src: img2,
    alt: "Notre premier pique-nique",
  },
  {
    src: img3,
    alt: "Randonnée en montagne",
  },
  {
    src: img4,
    alt: "Cuisine en duo",
  },
  {
    src: img5,
    alt: "Nos voyages",
  },
  {
    src: img6,
    alt: "Avec nos animaux",
  },
]

  return (
    <section id="galerie" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Nos Souvenirs</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Quelques moments précieux de notre histoire ensemble, en attendant de créer de nouveaux souvenirs le jour
              de notre mariage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    Voir plus
                  </span>
                </div>
              </div>
            ))}
          </div>

          {selectedImage !== null && (
            <div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-full">
                <img
                  src={images[selectedImage].src || "/placeholder.svg"}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-full object-contain"
                />
                <button
                  className="absolute top-4 right-4 text-white text-2xl hover:text-rose-300"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
