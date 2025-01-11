import Header from "../components/Header";

import Footer from "../components/Footer";
import SearchSection from "../components/SearchSection";
import GoogleMapSection from "../components/GoogleMapSection";

export default function Page() {
  return (
    <section className="flex flex-col justify-between min-h-screen">
      <Header />
        <div className=" md:p-6 flex flex-col-reverse md:flex-row justify-between">
           <div>
            <SearchSection />
           </div>
           <div className="flex-1">
            <GoogleMapSection/>
           </div>
        </div>
      <Footer/>
    </section>
  );
}
