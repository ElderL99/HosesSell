
import { Geist, Geist_Mono } from "next/font/google";
import PropertyList from "@/components/PropertyList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="p-2 bg-[#121826] text-white min-h-screen">

      <main>
        <PropertyList clasName="" />
      </main>


    </div>
  );
}
