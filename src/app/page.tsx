import React from "react";
import dynamic from "next/dynamic";
import AmbientBackground from "@/components/AmbientBackground";
import ReadingProgress from "@/components/ReadingProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecruiterFastTrack from "@/components/RecruiterFastTrack";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const CommandPalette = dynamic(() => import("@/components/CommandPalette"));

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <ReadingProgress />
      <CommandPalette />
      <JsonLd />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RecruiterFastTrack />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
