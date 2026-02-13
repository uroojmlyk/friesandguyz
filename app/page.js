import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Offers from "./components/Offers";
import OrderForm from "./components/OrderForm";

export default function Home() {
  return (
    <main className="relative max-w-[1440px] mx-auto bg-[#FFE5D9] overflow-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <Offers/>
      <OrderForm/>
      <Footer />
    </main>
  );
}