import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ComparisonSection from "./components/ComparisonSection";
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
        <ComparisonSection />
        <PlanSection />
        <ResultsSection />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
