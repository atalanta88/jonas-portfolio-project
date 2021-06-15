import React from "react";
import ProjectsList from "../sections/projects/ProjectsList";
import AboutSection from "../sections/about/About";
import CTASection from "../sections/CTA/CTA";
import ContactSection from "../sections/contact/Contact";

export default function HomePage() {
  return (
    <>
      <CTASection />
      <ProjectsList />
      <AboutSection />
      <ContactSection />
    </>
  );
}
