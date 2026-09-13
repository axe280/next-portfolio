import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PlayPreview from "./components/PlayPreview";
import Portfolio from "./components/Portfolio";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <>
      <main>
        <PlayPreview />

        <Hero />
        <AboutMe />
        <Portfolio />
        <WorkExperience />
      </main>
      <Footer />
    </>
  );
}
