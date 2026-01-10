import About from "@/components/about";
import Clients from "@/components/client";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Products from "@/components/product";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <Header />
      <Hero />
      <About />
      <Products />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}
