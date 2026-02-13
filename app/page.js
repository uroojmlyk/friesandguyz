import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import OrderForm from "./components/OrderForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative max-w-[1440px] mx-auto bg-[#FFE5D9] overflow-hidden">
      <Navbar />
      <Hero />
      
      <Offers/>
      <OrderForm/>
      <Contact/>
      <Footer />
    </main>
  );
}