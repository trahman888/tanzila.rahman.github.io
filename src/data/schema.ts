import type { PersonSchema } from "../lib/types";
import { profile } from "./profile";

export function generateSchema() {
  console.log('🤖 Generating dynamic JSON-LD Schema markup...');

  // Map your custom TypeScript structures to standard Schema.org specifications
  const currentAffiliation = profile.affiliations.find(a => a.current) || profile.affiliations[0];
  const educationHistory = profile.affiliations.filter(a => a.role.includes('Ph.D.') || a.role.includes('M.Sc.') || a.role.includes('B.Sc.'));
  const schemaData: PersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": profile.name,
    "jobTitle": profile.title,
    "url": profile.url,
    "image": profile.photo.startsWith('http') ? profile.photo : `${profile.url}${profile.photo}`,
    "worksFor": {
      "@type": "Organization",
      "name": currentAffiliation.org
    },
    "alumniOf": educationHistory.map(edu => ({
      "@type": "EducationalOrganization",
      "name": edu.org,
      "description": edu.role
    })),
    "knowsAbout": profile.researchInterests,
    "sameAs": [
      profile.links.googleScholar,
      profile.links.linkedin,
    ].filter(Boolean) // Cleans out any empty links safely
  };

  return schemaData;
}