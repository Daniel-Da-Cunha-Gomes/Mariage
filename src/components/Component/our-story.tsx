import img1 from "@/assets/our-story/1.png"
import img2 from "@/assets/our-story/2.png"
export function OurStory() {
  return (
    <section id="notre-histoire" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Notre Histoire</h2>
            <p className="text-lg text-stone-600">
              Une belle histoire d'amour qui nous mène aujourd'hui vers le plus beau jour de notre vie
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-serif text-stone-800 mb-4">Notre Rencontre</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Tout a commencé un soir d'été 2019 lors d'un barbecue chez des amis communs. Marie portait cette robe
                  bleue qui a immédiatement attiré l'attention de Pierre, et Pierre racontait ses histoires de voyage
                  qui ont fait rire Marie aux éclats.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Ce qui devait être une simple soirée entre amis s'est transformé en une conversation qui a duré
                  jusqu'au petit matin. Nous savions déjà que quelque chose de spécial était en train de naître.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={img1}
                  alt="Notre première rencontre"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={img2}
                  alt="La demande"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-stone-800 mb-4">La Demande</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Après 4 années merveilleuses ensemble, Pierre a organisé une surprise dans notre lieu de première
                  randonnée. Au sommet de la colline où nous avions partagé notre premier pique-nique, il s'est mis à
                  genoux avec la bague de grand-mère.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Les larmes, les rires, et un "OUI" qui résonne encore dans nos cœurs. Ce moment magique nous a
                  confortés dans notre envie de partager notre bonheur avec tous ceux qui nous sont chers.
                </p>
              </div>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif text-stone-800 mb-4">Aujourd'hui</h3>
              <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
                Nous voici aujourd'hui, prêts à nous dire "oui" devant nos familles et amis. Merci d'être présents pour
                célébrer avec nous cette nouvelle étape de notre vie. Votre présence rendra ce jour encore plus magique
                !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
