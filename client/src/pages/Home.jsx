// src/pages/Home.jsx - UPDATED WITH ANIMATIONS
import React from "react";
import SEO from "../components/seo/SEO";
import { OrganizationSchema, FAQSchema } from "../components/seo/StructuredData";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ContactForm } from "../components/ContactForm";
import { BlogPreview } from "../components/BlogPreview";
import { FeaturedGallery } from "../components/FeaturedGallery";
import { FAQ } from "../components/FAQ";
import { ScrollAnimation } from "../components/animations/ScrollAnimation";
import { WhatsAppButton, WhatsAppButtonSimple } from "../components/WhatsAppButton";

export function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Serenity Place | Premier Rehabilitation Center in Nairobi, Kenya",
    description:
      "Get professional addiction treatment at Serenity Place, one of the leading rehabs in Kenya. Evidence-based rehabilitation services in Nairobi.",
    url: "https://theserenityplace.org",
  };

  return (
    <>
      <SEO
        title="Rehab Center in Nairobi, Kenya | The Serenity Place"
        description="Serenity Place offers professional addiction treatment in Nairobi, Kenya. Evidence-based rehabilitation services for alcohol and drug recovery."
        keywords="rehabs in Kenya, rehabs in Nairobi, addiction treatment Kenya, rehabilitation center Nairobi, drug rehab Kenya, alcohol treatment Nairobi, recovery center Kenya"
        ogImage="https://collection.cloudinary.com/deci4v6zv/d6eeba09b5b973a82733c1b7d43654c4"
        structuredData={structuredData}
      />
      <OrganizationSchema />
      <FAQSchema />

      <Hero />
      {/* <WhatsAppButton /> */}
      <WhatsAppButtonSimple/>

      <ScrollAnimation yOffset={80} duration={0.8}>
        <Services />
      </ScrollAnimation>

      <ScrollAnimation yOffset={80} duration={0.8} delay={0.2}>
        <BlogPreview />
      </ScrollAnimation>

      <ScrollAnimation yOffset={80} duration={0.8} delay={0.3}>
        <FeaturedGallery />
      </ScrollAnimation>

      <ScrollAnimation yOffset={80} duration={0.8} delay={0.4}>
        <FAQ />
      </ScrollAnimation>

      <ScrollAnimation yOffset={80} duration={0.8} delay={0.5}>
        <ContactForm />
      </ScrollAnimation>
    </>
  );
}
