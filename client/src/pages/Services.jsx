// src/pages/Services.jsx
import SEO from "../components/seo/SEO";
import {
  Heart,
  Users,
  Clock,
  Shield,
  Home,
  Activity,
  Phone,
} from "lucide-react";
import {
  ScrollAnimation,
  StaggerAnimation,
  StaggerItem,
} from "../components/animations/ScrollAnimation";
import {
  WhatsAppButton,
  WhatsAppButtonSimple,
} from "../components/WhatsAppButton";

const services = [
  {
    icon: Heart,
    title: "Individual Therapy",
    description:
      "One-on-one sessions with licensed therapists trained in addiction recovery and co-occurring mental health conditions. Each treatment plan is built around the client's specific history, triggers, and goals — combining evidence-based approaches like cognitive behavioural therapy (CBT) and motivational interviewing to address both the addiction and the underlying issues driving it.",
  },
  {
    icon: Users,
    title: "Group Support",
    description:
      "Structured group therapy sessions where clients connect with others further along in recovery. Facilitated by trained counsellors, these sessions build accountability, reduce isolation, and reinforce relapse prevention skills in a confidential, judgment-free setting — a core part of long-term recovery, not just crisis treatment.",
  },
  {
    icon: Clock,
    title: "24/7 Medical Care & Detoxification",
    description:
      "Round-the-clock medical supervision for clients going through withdrawal and early recovery. Our clinical team monitors vital signs, manages withdrawal symptoms safely, and provides emotional support at every stage — ensuring detox is handled in a controlled, medically supervised environment rather than attempted alone.",
  },
  {
    icon: Shield,
    title: "Aftercare Planning & Relapse Prevention",
    description:
      "Recovery doesn't end at discharge. We build a personalised aftercare plan for every client covering relapse prevention strategies, follow-up counselling, family support, and reintegration into work or school — reducing the risk of relapse in the critical months after treatment.",
  },
  {
    icon: Home,
    title: "Residential (Inpatient) Program",
    description:
      "A live-in treatment program set in a calm, secure environment away from daily triggers. Clients receive full-time clinical and emotional support, structured daily routines, and complete focus on recovery — suited to those needing intensive, immersive treatment for substance use or co-occurring disorders.",
  },
  {
    icon: Activity,
    title: "Wellness & Holistic Programs",
    description:
      "Recovery is more than clinical treatment. Our holistic programs include yoga, guided meditation, fitness, and nutrition support — helping clients rebuild physical health and emotional resilience alongside their clinical care.",
  },
];

export function Services() {
  return (
    <>
      <SEO
        title="Our Treatment Programs & Services | Serenity Place"
        description="Explore our addiction treatment and mental health programs in Kahawa Sukari, Nairobi — including residential care, detox, therapy, and aftercare support."
        canonical="https://theserenityplace.org/services"
        ogImage="https://collection.cloudinary.com/deci4v6zv/d6eeba09b5b973a82733c1b7d43654c4"
        keywords="addiction treatment programs Nairobi, rehabilitation services Kenya, inpatient rehab Kahawa Sukari, detoxification Nairobi, therapy programs Kenya, aftercare support Nairobi"
      />

      <WhatsAppButtonSimple />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-16">
          <ScrollAnimation yOffset={0} duration={1}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Our Treatment Programs & Services
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Comprehensive, evidence-based addiction treatment and mental
                  health programs designed to support every stage of your
                  recovery journey.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <StaggerItem key={index}>
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                        <service.icon
                          className="w-7 h-7 text-white"
                          aria-hidden="true"
                        />
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>

                      <p className="text-gray-600 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerAnimation>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <ScrollAnimation yOffset={50} duration={0.8}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Take the first step towards recovery today. Our compassionate
                team is here to help you 24/7.
              </p>
              <StaggerAnimation staggerDelay={0.1}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <StaggerItem>
                    <a
                      href="tel:+254722970951"
                      className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: (+254) 722 970 951
                    </a>
                  </StaggerItem>
                  <StaggerItem>
                    <a
                      href="/#contact"
                      className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                    >
                      Contact Us
                    </a>
                  </StaggerItem>
                </div>
              </StaggerAnimation>
            </div>
          </ScrollAnimation>
        </section>
      </div>
    </>
  );
}
