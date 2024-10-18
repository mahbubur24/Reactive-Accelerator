import About from "./components/About";
import Contact from "./components/Contact";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Feature";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Team from "./components/Team";
import Property from "./components/Property";

export default function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Features></Features>
      <Property></Property>
      <About></About>
      <Cta></Cta>
      <Faq></Faq>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
