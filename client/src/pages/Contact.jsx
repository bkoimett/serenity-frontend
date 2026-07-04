// src/pages/Contact.jsx
import SEO from "../components/seo/SEO";
import { ContactForm } from "../components/ContactForm";
import { ContactSchema } from "../components/seo/StructuredData";
import {
  WhatsAppButton,
  WhatsAppButtonSimple,
} from "../components/WhatsAppButton";

export function Contact() {
  return (
    <>
      <SEO
        title="Contact The Serenity Place | Nairobi Rehab Center"
        description="Reach The Serenity Place Rehabilitation Centre in Kahawa Sukari, Nairobi. Call +254 722 970951 to learn about admissions and treatment."
        canonical="https://theserenityplace.org/contact"
        ogImage="https://collection.cloudinary.com/deci4v6zv/d6eeba09b5b973a82733c1b7d43654c4"
        keywords="contact rehabilitation centre Nairobi, addiction treatment admissions Kenya, Serenity Place contact, Kahawa Sukari rehab phone number"
      />
      <ContactSchema />

      <WhatsAppButtonSimple />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact The Serenity Place
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Reach out for admissions, general inquiries, or to schedule a
                facility tour. Our compassionate team is here to help 24/7.
              </p>
            </div>
          </div>
        </section>

        {/* NAP Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Name
                  </h3>
                  <p className="text-gray-600">
                    The Serenity Place Rehabilitation Centre Kahawa Sukari
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    Kiu River Road, 2nd South Avenue
                    <br />
                    Kahawa Sukari, Nairobi, Kenya
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="tel:+254722970951"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      +254 722 970 951
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
