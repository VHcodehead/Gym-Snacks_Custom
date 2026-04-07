"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const reviews = [
  {
    name: "John",
    location: "Gilbert, AZ",
    body: "I've tried a bunch of different gummy preworkouts but they all tasted HORRIBLE except for these. Pump is top notch but they no joke taste like candy.",
  },
  {
    name: "Joshua O.",
    location: "San Jose, CA",
    body: "I avoid proprietary blends and companies who are not forthcoming about what's in their product. GymSnacks list their ingredients and do not hide. Insane pumps and focus — I've been able to break previous plateaus and hit new personal records.",
  },
  {
    name: "Jason G.",
    location: "Tempe, AZ",
    body: "My friend told me they taste like candy but give a great pump. I bet him $20 I'd hate it — I've had other gummy preworkouts and hated them. I owe him $20 now.",
  },
  {
    name: "Grant Y.",
    location: "Tempe, AZ",
    body: "I ran out and tried to go back to my preworkout drinks and immediately hated it. Great stuff seriously.",
  },
  {
    name: "Nicholas O.",
    location: "Salt Lake City, UT",
    body: "Gym Snacks are the future of pre-workout supplements. They taste great, I don't need to find a water bottle or dry shoot a powder, and you get massive pumps.",
  },
  {
    name: "Melissa R.",
    location: "Phoenix, AZ",
    body: "What caught my eye was NO bloating — something I struggle with pre-workout. Not only do these work great but you can give yourself that extra boost at the end of your workout when you start to feel fatigued!",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-20 bg-background border-y-[5px] border-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          accent="WORD FOR IT"
          subtitle="57 reviews · 5.0 stars · All verified purchases"
        >
          DON&apos;T TAKE OUR
        </SectionTitle>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="bg-surface p-6 rounded-comic-lg border-[4px] border-brand-black shadow-comic-lg h-full flex flex-col gap-4"
              >
                <div className="text-brand-yellow text-xl tracking-widest">★★★★★</div>
                <p className="text-muted text-sm leading-relaxed italic flex-1">
                  &ldquo;{review.body}&rdquo;
                </p>
                <div className="font-display text-sm text-brand-pink tracking-wide">
                  — {review.name} · {review.location}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="/#shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-pink text-white font-display text-lg rounded-pill border-[3px] border-brand-black shadow-comic-lg hover:shadow-comic-xl transition-all hover:-translate-y-1"
          >
            SHOP NOW — JOIN 57 HAPPY CUSTOMERS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
