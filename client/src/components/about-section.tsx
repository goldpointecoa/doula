import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-utils";
import { IdCard, Heart, Baby } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-8 lg:py-12 woodsy-texture nature-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="fade-in space-y-6">
            <img
              src="/assets/about/essie.png"
              alt="Essie - Professional Doula"
              className="shadow-xl w-full h-auto max-w-lg lg:max-w-2xl mx-auto lg:mx-0 border-4 border-ash-gray-200"
              style={{ borderRadius: "17rem 17rem 1rem 1rem" }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg lg:max-w-2xl mx-auto lg:mx-0">
              <img
                src="/assets/about/preggers.png"
                alt="Essie supporting a family"
                className="rounded-xl shadow-lg w-full h-auto object-cover border-2 border-ash-gray-200"
              />
              <img
                src="/assets/about/birf.png"
                alt="Peaceful birth environment"
                className="rounded-xl shadow-lg w-full h-auto object-cover border-2 border-ash-gray-200"
              />
            </div>
          </div>

          <div className="fade-in">
            <h2 className="font-lora text-3xl lg:text-4xl font-semibold text-ebony-800 mb-6 leaf-decoration">
              Hi, I'm Esther Kimball
            </h2>
            <div className="space-y-6 text-lg text-ebony-700 leading-relaxed">
              <p>
                Wife, mother, and daughter of Christ. Living in Tacoma,
                Washington with my cat Butternut and raising my sweet little
                boy.
              </p>
              <p>
                My love for birth work began early. When I was a kid, I stumbled
                across my mom’s old Lamaze teaching materials that were filled
                with birthing diagrams, I was instantly captivated. She had
                trained as a midwife and birthed five babies at home, from the
                Netherlands to Alaska to Washington. Birth has always enamored
                me.
              </p>
              <p>
                When it came time to welcome my own son into the world, I gave
                birth unmedicated in a birth center, surrounded by strong,
                cheering women who guided me through such a scary and new
                experience in my life. My doula helped keep my husband informed,
                involved and taught him how to assist me in birth so I didn't
                feel like I was doing it alone. That showed me what’s possible
                when women are supported, educated, and uplifted. And now, I
                want to be that support for someone else.
              </p>
              <p>
                I dream of a world where every woman is deeply informed and
                fiercely empowered to birth the way she desires. I’m a deep
                empath, which means I show up with warmth, joy, and a deep
                desire to serve. I believe in holistic care, informed consent,
                and creating a birth space where you feel safe, supported, and
                in control.
              </p>
              <p>
                Alongside my work as a doula, I do social media marketing and
                would be honored to capture moments of your birth if that’s
                something you’d like. There’s something deeply moving about
                preserving those first breaths, first cries and the raw beauty
                of birth.
              </p>
              <p>
                Alongside my work as a doula, I do social media marketing and
                would be honored to capture moments of your birth if that’s
                something you’d like. There’s something deeply moving about
                preserving those first breaths, first cries and the raw beauty
                of birth.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-10 sm:flex-row gap-4 justify-center fade-in">
          <Button
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="bg-transparent border-2 border-[#424b3a] text-[#424b3a] hover:bg-[#424b3a] hover:text-white px-16 py-8 rounded-full text-xl font-medium transition-all duration-300"
          >
            Contact Me
          </Button>
        </div>
        {/* Bible verses - side by side, understated, centered, wider columns */}
        <div className="mt-8 flex flex-col items-center max-w-4xl mx-auto select-none">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full justify-center text-sm md:text-base text-ebony-600 opacity-80 text-center">
            <span className="flex-1 min-w-[260px] md:min-w-[340px]">
              "For you created my
              inmost being; you knitted me together in my mother's womb." <br />— <span className="italic">Psalms 139:13</span>
            </span>
            <span className="flex-1 min-w-[260px] md:min-w-[340px]">
              “Before I formed you
              in the womb I knew you, before you were born I set you apart." <br />— <span className="italic">Jeremiah 1:5</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
