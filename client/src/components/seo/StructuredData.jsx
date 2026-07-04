import React, { useEffect } from "react";

export const OrganizationSchema = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "RehabilitationCenter",
      name: "Serenity Place",
      description:
        "Premier rehabilitation center in Nairobi, Kenya offering addiction treatment and recovery services",
      url: "https://theserenityplace.org",
      telephone: "+254-722-970951",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nairobi, Kenya",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      sameAs: [
        "https://www.facebook.com/theserenityplacerehab",
        "https://www.instagram.com/theserenityplacerehab",
        "https://x.com/_SerenityPlace_",
        "https://www.tiktok.com/@theserenityplace",
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-1.1963609538261084",
        longitude: "36.952704893254044",
      },
      openingHours: "Mo-Su 24/7",
      medicalSpecialty: "Addiction Medicine",
      serviceType: "Rehabilitation Services",
      areaServed: ["Kenya", "Nairobi", "East Africa"],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export const ContactSchema = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "The Serenity Place Rehabilitation Centre Kahawa Sukari",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kiu River Road, 2nd South Avenue",
        addressLocality: "Kahawa Sukari",
        addressRegion: "Nairobi",
        addressCountry: "KE",
      },
      telephone: "+254722970951",
      url: "https://theserenityplace.org/contact",
      medicalSpecialty: "Addiction Medicine",
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "134",
        bestRating: "5",
        worstRating: "1"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export const ArticleSchema = ({
  headline,
  image,
  datePublished,
  dateModified,
  author,
  publisher,
  mainEntityOfPage,
}) => {
  useEffect(() => {
    if (!headline) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline,
      image:
        image ||
        "https://collection.cloudinary.com/deci4v6zv/d6eeba09b5b973a82733c1b7d43654c4",
      datePublished,
      dateModified: dateModified || datePublished,
      author: author || {
        "@type": "Organization",
        name: "The Serenity Place",
      },
      publisher: publisher || {
        "@type": "Organization",
        name: "The Serenity Place",
      },
    };

    if (mainEntityOfPage) {
      structuredData.mainEntityOfPage = {
        "@type": "WebPage",
        "@id": mainEntityOfPage,
      };
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [headline, image, datePublished, dateModified, author, publisher, mainEntityOfPage]);

  return null;
};

export const FAQSchema = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of treatment does The Serenity Place offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer a range of addiction and mental health treatment programs, including residential (inpatient) care, individual and group therapy, medically supervised detoxification, aftercare planning, and holistic wellness programs. Each treatment plan is tailored to the individual's needs."
          }
        },
        {
          "@type": "Question",
          "name": "Where is The Serenity Place located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are located on Kiu River Road, 2nd South Avenue, Kahawa Sukari, Nairobi, Kenya."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started or schedule a facility tour?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach us by phone at +254 722 970951 or through our contact form to discuss admissions, ask questions, or arrange a tour of our facility."
          }
        },
        {
          "@type": "Question",
          "name": "Does The Serenity Place offer detox services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide medically supervised detoxification with round-the-clock clinical care to help manage withdrawal safely as part of the recovery process."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after I complete a treatment program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build a personalised aftercare plan for every client, including relapse prevention strategies, follow-up counselling, and support reintegrating into daily life, work, or school."
          }
        },
        {
          "@type": "Question",
          "name": "Is treatment confidential?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All therapy sessions, group support meetings, and client information are treated with strict confidentiality."
          }
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};
