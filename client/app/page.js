import Image from "next/image";
import TopBar from "@/components/TopNavigation/TopBar";
import Blog from "@/components/BlogSection/Blog";
import Footer from "@/components/FooterSection/Footer";
import BlogDetail from "@/components/BlogSection/BlogDetails";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col">
      <Blog />
    </main>
    
  );
}
