import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
export default function MenuPage() {
  return (
    <main className="relative max-w-[1440px] mx-auto bg-[#FFE5D9] overflow-hidden">
      <Navbar />
      <Menu />
      <Footer />
    </main>
  );
}