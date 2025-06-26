import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Baby,
  Camera,
  Bath,
  Check,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Baby,
      title: "Prenatal Care",
      description:
        "Free meet & greet to hear your story and answer questions.",
      features: [
        "Unlimited text/email support throughout pregnancy",
        "36-week birth planning session",
        "Guidance through birth options and interventions",
      ],
      bgColor: "bg-ash-gray-50",
      iconColor: "text-ash-gray-600",
      checkColor: "text-ash-gray-600",
    },
    {
      icon: Heart,
      title: "Birth Support",
      description:
        "On call 24/7 from 38 weeks.",
      features: [
        "Breathing and positional support during labor",
        "Coaching and reassurance for your partner",
        "Support for 1-2 hours post birth for bonding, feeding, and recovery afterward",
      ],
      bgColor: "bg-ash-gray-50",
      iconColor: "text-ash-gray-600",
      checkColor: "text-ash-gray-600",
    },
    {
      icon: Camera,
      title: "Photography",
      description:
        "Video and photos using my phone or yours.",
      features: [
        "Candid or posed shots—your choice",
        "Capture your baby’s first moments",
        "Discretion based on your comfort",
      ],
      bgColor: "bg-ash-gray-50",
      iconColor: "text-ash-gray-600",
      checkColor: "text-ash-gray-600",
    },
  ];

  return (
    <section
      id="services"
      className="py-8 lg:py-12 bg-sage-mist nature-overlay"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-lora text-3xl lg:text-4xl font-semibold text-ebony-800 mb-6 leaf-decoration">
            My Doula Services
          </h2>
          <p className="text-xl text-ebony-700 max-w-3xl mx-auto leading-relaxed">
            From pregnancy through postpartum, I provide personalized support
            tailored to your unique needs and birth preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.bgColor} rounded-2xl p-8 fade-in border-none shadow-lg`}
            >
              <CardContent className="p-0">
                <div className={`${service.iconColor} text-4xl mb-6`}>
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="font-lora text-2xl font-semibold text-ebony-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-ebony-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="text-ebony-700 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check
                        className={`w-4 h-4 ${service.checkColor} mr-2 flex-shrink-0`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
