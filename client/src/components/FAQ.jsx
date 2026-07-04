// src/components/FAQ.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollAnimation } from "./animations/ScrollAnimation";

const faqs = [
  {
    question: "What types of treatment does The Serenity Place offer?",
    answer: "We offer a range of addiction and mental health treatment programs, including residential (inpatient) care, individual and group therapy, medically supervised detoxification, aftercare planning, and holistic wellness programs. Each treatment plan is tailored to the individual's needs."
  },
  {
    question: "Where is The Serenity Place located?",
    answer: "We are located on Kiu River Road, 2nd South Avenue, Kahawa Sukari, Nairobi, Kenya."
  },
  {
    question: "How do I get started or schedule a facility tour?",
    answer: "You can reach us by phone at +254 722 970951 or through our contact form to discuss admissions, ask questions, or arrange a tour of our facility."
  },
  {
    question: "Does The Serenity Place offer detox services?",
    answer: "Yes, we provide medically supervised detoxification with round-the-clock clinical care to help manage withdrawal safely as part of the recovery process."
  },
  {
    question: "What happens after I complete a treatment program?",
    answer: "We build a personalised aftercare plan for every client, including relapse prevention strategies, follow-up counselling, and support reintegrating into daily life, work, or school."
  },
  {
    question: "Is treatment confidential?",
    answer: "Yes. All therapy sessions, group support meetings, and client information are treated with strict confidentiality."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation yOffset={50} duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our treatment programs and services.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 px-8 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}