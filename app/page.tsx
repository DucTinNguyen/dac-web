
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HighLight from "@/components/highlight";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Banner />
      <HighLight />
      {/* <Footer isAbsolute /> */}
    </main>
  );
}
