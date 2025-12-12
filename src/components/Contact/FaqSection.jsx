'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function FaqSection() {
  const faqs = [
    {
      question: 'What is the typical lead time for custom orders?',
      answer:
        'Standard manufacturing lead times range from 2-4 weeks depending on complexity and volume. For urgent requirements, please contact our sales team directly.',
    },
    {
      question: 'Do you provide on-site installation support?',
      answer:
        'Yes, our technical team provides complete on-site installation and commissioning support for all our major equipment and systems.',
    },
    {
      question: 'Can I request a factory visit before placing an order?',
      answer:
        'Absolutely. We welcome clients to visit our facilities in Pune and Nashik to inspect our manufacturing capabilities and quality control processes.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <FaqItem faq={f} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border border-gray-200 rounded-sm overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <span className="font-bold text-gray-800">{faq.question}</span>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="text-orange-500"
        >
          {open ? <FaMinus /> : <FaPlus />}
        </motion.div>
      </button>

      {/* SMOOTHEST ACCORDION ANIMATION POSSIBLE */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.25, 0.8, 0.25, 1], // SUPER SMOOTH cubic-bezier
            }}
            className="overflow-hidden"
          >
            <div className="p-6 border-t border-gray-200 bg-white">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
