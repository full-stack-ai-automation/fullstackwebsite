export function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Full Stack AI",
    "url": "https://fullstackaiautomation.com",
    "logo": "https://fullstackaiautomation.com/icon.png",
    "description": "AI consulting team providing ROI-driven automation systems for CRM strategy and workflow optimization",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "availableLanguage": "English"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation Consulting",
    "provider": {
      "@type": "Organization",
      "name": "Full Stack AI"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Enabled CRM Automation",
            "description": "85% increase in follow-up rates through intelligent CRM automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow Automation",
            "description": "Save 20+ hours per week with automated business processes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Customer Communication Systems",
            "description": "70% reduction in response time with AI-powered communication"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Analytics",
            "description": "Data-driven insights for business optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Operations Optimization",
            "description": "Streamline business operations with AI automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom AI Solutions",
            "description": "Tailored AI automation solutions for your business needs"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}
