import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
    <div>
      <Hero/>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
}
