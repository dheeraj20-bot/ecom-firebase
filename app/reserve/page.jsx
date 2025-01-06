import Header from "../components/Header";

import Footer from "../components/Footer";
import SearchSection from "../components/SearchSection";
import GoogleMapSection from "../components/GoogleMapSection";

export default function Page() {
  return (
    <section className="flex flex-col justify-between min-h-screen">
      <Header />
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
           <div>
            <SearchSection />
           </div>
           <div className="col-span-2">
            <GoogleMapSection/>
           </div>
        </div>
      <Footer/>
    </section>
  );
}
