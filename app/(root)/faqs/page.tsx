"use client"
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment online through our website by selecting your desired service, date, and time. You’ll receive a confirmation via email."
  },
  {
    question: "What services do you offer?",
    answer: "We provide a wide range of salon services, including haircuts, coloring, styling, manicures, pedicures, facials, and more. Check our Services page for details."
  },
  {
    question: "Do you accept walk-ins?",
    answer: "Yes, we welcome walk-ins! However, we recommend booking in advance to secure your preferred time slot."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit/debit cards, and digital payments for your convenience."
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer: "Yes, you can cancel or reschedule your appointment at least 24 hours in advance through your account or by calling us directly."
  }
];

export default function FAQsPage() {
const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggleFAQ = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
};


  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 cursor-pointer bg-white shadow-md transition duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">{faq.question}</h2>
              <FaChevronDown
                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
