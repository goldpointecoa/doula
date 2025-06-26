import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function PricingSection() {
  const packages = [
    {
      name: "Essential",
      price: "$1,200",
      description: "Perfect for first-time parents",
      features: [
        "2 prenatal visits",
        "Birth support (labor & delivery)",
        "1 postpartum visit",
        "Phone/text support",
        "Birth plan assistance"
      ],
      popular: false
    },
    {
      name: "Complete",
      price: "$1,800",
      description: "Comprehensive care & support",
      features: [
        "3 prenatal visits",
        "Birth support (labor & delivery)",
        "2 postpartum visits",
        "24/7 phone/text support",
        "Childbirth education class",
        "Birth photography referrals"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$2,500",
      description: "Full-spectrum support",
      features: [
        "Unlimited prenatal support",
        "Birth support (labor & delivery)",
        "4 postpartum visits",
        "24/7 support (all stages)",
        "Private childbirth classes",
        "Lactation support included"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-8 lg:py-12 woodsy-texture nature-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-lora text-3xl lg:text-4xl font-semibold text-ebony-800 mb-6 leaf-decoration">
            Investment in Your Journey
          </h2>
          <p className="text-xl text-ebony-700 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing for comprehensive doula care. Payment plans available to make support accessible for every family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {packages.map((pkg, index) => (
            <Card key={index} className={`bg-white rounded-2xl shadow-lg fade-in relative border-2 ${pkg.popular ? 'border-copper-400 shadow-xl' : 'border-ash-gray-200'}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-copper-400 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center mb-8 pt-8">
                <h3 className="font-lora text-2xl font-semibold text-ebony-800 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-copper-400 mb-2">{pkg.price}</div>
                <p className="text-ebony-700">{pkg.description}</p>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-ebony-700">
                      <Check className="w-5 h-5 text-copper-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-copper-400 hover:bg-copper-600 text-white py-3 px-6 rounded-full text-lg font-medium transition-colors duration-300">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <p className="text-ebony-700 mb-4">All packages include backup doula coverage and flexible payment plans</p>
          <p className="text-sm text-ebony-600">À la carte services available • Sliding scale options for qualifying families</p>
        </div>
      </div>
    </section>
  );
}
