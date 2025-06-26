import { TrendingDown, Clock, Heart, Baby, HandHeart, Syringe } from "lucide-react";

export default function FactoidsSection() {
  const factoids = [
    {
      icon: TrendingDown,
      percentage: "47%",
      title: "Lower Cesarean Rates",
      description: "Doulas reduce the need for cesarean births, empowering natural delivery.",
      color: "text-copper-500",
      bgColor: "bg-sage-50",
    },
    {
      icon: Syringe,
      percentage: "15%",
      title: "Less Epidural Use",
      description: "Doulas help you manage pain naturally, decreasing reliance on epidurals.",
      color: "text-sage-600",
      bgColor: "bg-sage-50",
    },
    {
      icon: Baby,
      percentage: "31%",
      title: "Higher Birth Satisfaction",
      description: "Doulas boost your confidence, making your birth experience more fulfilling.",
      color: "text-dun-600",
      bgColor: "bg-sage-50",
    },
    {
      icon: Clock,
      percentage: "40min",
      title: "Shorter Labors",
      description: "Doulas speed up labor, helping you deliver faster and with less intervention.",
      color: "text-ash-gray-600",
      bgColor: "bg-sage-50",
    },
    {
      icon: Heart,
      percentage: "93%",
      title: "'Very Satisfied' with Their Doula",
      description: "Doulas provide emotional and practical support contributing to a positive birth experience.",
      color: "text-copper-600",
      bgColor: "bg-sage-50",
    },
    {
      icon: HandHeart,
      percentage: "85%",
      title: "Partners Feel More Supported",
      description: "Having a doula makes partners feel more supported and less stressed during labor.",
      color: "text-sage-500",
      bgColor: "bg-sage-50",
    },
  ];

  return (
    <section className="py-8 lg:py-12 bg-gradient-to-br from-warm-cream to-dun-50 nature-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="font-lora text-3xl lg:text-4xl font-semibold text-ebony-800 mb-6 leaf-decoration">
            Benefits of a Doula
          </h2>
          <p className="text-lg text-ebony-700 max-w-3xl mx-auto">
            Research shows the powerful impact of doula support on birth outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {factoids.map((factoid, index) => (
            <div
              key={index}
              className={`${factoid.bgColor} rounded-2xl p-6 text-center fade-in border border-white/50`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${factoid.color} mx-auto mb-4`}>
                <factoid.icon className="w-12 h-12 mx-auto" />
              </div>
              <div className={`font-lora text-4xl lg:text-5xl font-bold ${factoid.color} mb-2`}>
                {factoid.percentage}
              </div>
              <h3 className="font-semibold text-ebony-800 text-lg mb-3">
                {factoid.title}
              </h3>
              <p className="text-ebony-700 text-sm leading-relaxed">
                {factoid.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <p className="text-sm text-ebony-600 italic">
            *Statistics based on peer-reviewed research studies on doula care effectiveness from authoritative sources like <a href="https://evidencebasedbirth.com/" target="_blank">Evidence Based Birth</a>.
          </p>
        </div>
      </div>
    </section>
  );
}