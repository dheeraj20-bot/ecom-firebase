import { Section } from "lucide-react";
import Header from "../components/Header";
import TripDetailsPage from "../components/trip-details-page";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <section>
      <Header />
      <TripDetailsPage/>
      <Footer/>
    </section>
  );
}
