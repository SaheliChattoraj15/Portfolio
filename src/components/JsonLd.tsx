import React from "react";
import { personalInfo } from "@/data/portfolioData";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: "Final Year B.Tech • Analytics & Project Management",
    description: personalInfo.tagline,
    url: "https://saheli-chattoraj.vercel.app",
    sameAs: [
      personalInfo.socialLinks.linkedin,
      personalInfo.socialLinks.github,
    ],
    knowsAbout: [
      "Business Analytics",
      "SQL",
      "Microsoft Excel",
      "Project Management",
      "Agile & Scrum",
      "KPI Reporting",
      "Product Operations",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Bachelor of Technology in Computer Science & Engineering",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${personalInfo.name} — Portfolio`,
    url: "https://saheli-chattoraj.vercel.app",
    description: personalInfo.bioShort,
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
