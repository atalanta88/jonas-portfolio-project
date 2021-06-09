import React from "react";
import ProjectsList from "../sections/projects/ProjectsList";
import AboutSection from "../sections/about/About";
import CTASection from "../sections/CTA/CTA";

export default function HomePage() {
  return (
    <>
      <CTASection />
      <ProjectsList />
      <AboutSection />
    </>
  );
}
