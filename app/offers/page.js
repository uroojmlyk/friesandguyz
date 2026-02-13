import Navbar from "../components/Navbar";
import Offers from "../components/Offers";
import Footer from "../components/Footer";

export default function OffersPage() {
  return (
    <main className="relative max-w-[1440px] mx-auto bg-[#FFE5D9] overflow-hidden">
      <Navbar />
      <Offers />
      <Footer />
    </main>
  );
}