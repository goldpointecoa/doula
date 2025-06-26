import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Essie was absolutely amazing throughout our entire birth experience. Her calm presence and expert guidance helped me feel empowered and supported every step of the way. I couldn't have asked for a better doula!",
      name: "Sarah M.",
      role: "First-time mom",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "Having Essie at our birth made all the difference. She advocated for our birth plan and helped us navigate unexpected changes with grace and confidence. We felt so supported and cared for.",
      name: "Maria & James L.",
      role: "Second baby",
      image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "The postpartum support from Essie was invaluable. She helped with breastfeeding, newborn care, and gave me the confidence I needed as a new mother. Her warmth and expertise mean everything.",
      name: "Amanda R.",
      role: "New mom",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "Essie's childbirth classes prepared us so well for our birth experience. Her teaching style is warm and informative, and we felt confident going into labor thanks to her guidance.",
      name: "Jennifer & Mike C.",
      role: "Expecting parents",
      image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "When we experienced a pregnancy loss, Essie provided compassionate support that helped us through the most difficult time of our lives. Her kindness and understanding were a lifeline.",
      name: "Lisa & David H.",
      role: "Bereavement support",
      image: "https://images.unsplash.com/photo-1521566652839-697aa473761a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "As a single mom, having Essie's support made me feel less alone during my pregnancy and birth. She was my advocate, my cheerleader, and my source of strength throughout the entire journey.",
      name: "Rachel T.",
      role: "Single mom",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-8 lg:py-12 woodsy-texture nature-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-lora text-3xl lg:text-4xl font-semibold text-ebony-800 mb-6 leaf-decoration">
            What Families Say
          </h2>
          <p className="text-xl text-ebony-700 max-w-3xl mx-auto leading-relaxed">
            Hear from the families I've had the honor of supporting through their birth journeys.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white rounded-2xl p-6 border border-ash-gray-200 h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex text-copper-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-ebony-800 mb-6 italic leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-ash-gray-300"
                      />
                      <div>
                        <div className="font-semibold text-ebony-800">{testimonial.name}</div>
                        <div className="text-sm text-ebony-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation arrows below the testimonials */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="bg-white border-2 border-copper-300 text-ebony-700 relative left-auto top-auto transform-none" />
            <CarouselNext className="bg-white border-2 border-copper-300 text-ebony-700 relative right-auto top-auto transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
