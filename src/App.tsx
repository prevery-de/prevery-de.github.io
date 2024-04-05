import './index.css'
import Hero from "./components/hero.tsx";
import Vision from "./components/vision.tsx";
import Pain from "./components/pain.tsx";
import Footer from "./components/footer.tsx";
import Services from "./components/services.tsx";
import CTA from "./components/cta.tsx";


function Index() {
  return (
    <>
        <Hero />
        <Vision />
        <Services />
        <Pain />
        <CTA />
        <Footer />
    </>
  )
}

export default Index
