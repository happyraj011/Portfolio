import Image from "next/image";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import RightSide from "@/components/RightSide";
import LeftSide from "@/components/LeftSide";
import Contact from "@/components/contact";





export default function Home() {
  return (
    <main className="flex flex-col gap-8 sm:gap-10 px-6 sm:px-12 py-8 sm:py-16 min-h-screen">
      <div className="hidden xl:inline-flex w-28 h-full fixed left-0 bottom-3">
        <LeftSide/>
      </div>


      <section className="flex flex-col items-center sm:items-start gap-6 sm:gap-8 w-full">
        <Intro />
      </section>
      
      <section className="flex flex-col items-center sm:items-start gap-6 sm:gap-8 w-full">
        <About />
      </section>
     
       <Projects/>
       <Contact/>
      
    <div className="hidden xl:inline-flex w-20 h-full fixed right-0 bottom-3">
      <RightSide/>
    </div>
       
    
    </main>
  );
}
