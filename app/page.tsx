
import Backer from "@/components/backers";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HighLight from "@/components/highlight";
import WhyChooseUs from "@/components/whychooseus";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Banner />
      <HighLight />
      <WhyChooseUs />
      <Backer />
      {/* <Footer isAbsolute /> */}
    </main>
  );
}
