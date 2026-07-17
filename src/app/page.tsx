import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founders from "@/components/Founders";
import Classes from "@/components/Classes";
import Schedule from "@/components/Schedule";
import Studio from "@/components/Studio";
import LocationMap from "@/components/LocationMap";
import Tickets from "@/components/Tickets";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <About />
      <Founders />
      <Classes />
      <Schedule />
      <Studio />
      <LocationMap />
      <Tickets />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
