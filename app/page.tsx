import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import PlanSection from "./components/PlanSection";
import ResultsSection from "./components/ResultsSection";
import HomeCTA from "./components/HomeCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <PlanSection />
        <ResultsSection />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
