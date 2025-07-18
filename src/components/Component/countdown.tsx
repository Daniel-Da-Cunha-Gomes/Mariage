"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/Component/ui/card"

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date("2024-06-15T14:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-8">Plus que...</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-stone-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">{timeLeft.days}</div>
                <div className="text-stone-600 font-medium">Jours</div>
              </CardContent>
            </Card>
            <Card className="border-stone-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">{timeLeft.hours}</div>
                <div className="text-stone-600 font-medium">Heures</div>
              </CardContent>
            </Card>
            <Card className="border-stone-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">{timeLeft.minutes}</div>
                <div className="text-stone-600 font-medium">Minutes</div>
              </CardContent>
            </Card>
            <Card className="border-stone-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">{timeLeft.seconds}</div>
                <div className="text-stone-600 font-medium">Secondes</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
