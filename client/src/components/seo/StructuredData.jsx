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
