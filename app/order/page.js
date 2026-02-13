import Navbar from "../components/Navbar";
import OrderForm from "../components/OrderForm";
import Footer from "../components/Footer";

export default function OrderPage() {
  return (
    <main className="relative max-w-[1440px] mx-auto bg-[#FFE5D9] overflow-hidden">
      <Navbar />
      <OrderForm />
      <Footer />
    </main>
  );
}