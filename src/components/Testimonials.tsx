
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: t("Ana Novak"),
      company: t("Lokalna Restavracija"),
      content: t("EDGE je preoblikoval našo spletno prisotnost. Nova spletna stran je povečala naše rezervacije za 150% v prvem mesecu. Njihova pozornost na podrobnosti in razumevanje naših potreb je bilo izjemno."),
      rating: 5
    },
    {
      id: "2", 
      name: t("Marko Petrič"),
      company: t("Tech Startup"),
      content: t("Sodelovanje z EDGE je bilo game-changer za naš startup. Njihova tehnična ekspertiza in kreativni pristop sta nam pomagala zgraditi platformo, ki naše uporabnike navdušuje vsak dan."),
      rating: 5
    },
    {
      id: "3",
      name: t("Sara Kralj"),
      company: t("E-trgovina"),
      content: t("Naša e-trgovina je doživela revolucijo zahvaljujoč EDGE. Optimizacije zmogljivosti so zmanjšale čas nalaganja za 70%, prodaja pa se je povečala za 200%. Priporočam vsem!"),
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t("Testimonials")}
          </h2>
          <p className="text-gray-700">
            {t("See what our clients say about working with us and the results we've achieved together.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-black text-black" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-black">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
