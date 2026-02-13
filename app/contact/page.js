import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="relative max-w-[1440px] mx-auto bg-[#FFE5D9] overflow-hidden">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}