import { siteConfig } from "@/config/site";
import { services } from "@/config/services";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: siteConfig.legal.companyName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.legal.email,
    telephone: siteConfig.legal.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.legal.address,
      addressCountry: "IT",
    },
    vatID: siteConfig.legal.vat,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servizi di trading",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "it-IT",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
