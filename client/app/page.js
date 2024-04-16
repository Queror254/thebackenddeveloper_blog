import Image from "next/image";
import Blog from "@/components/BlogSection/Blog";


export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col">
      <Blog />
    </main>
    
  );
}
