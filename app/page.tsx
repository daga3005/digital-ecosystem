
import Hero from "./components/home/Hero";
import Definition from "./components/home/Definition"
import Cursos from "./components/home/Cursos"
import Cop from "./components/home/Cop"
import Cta from "./components/home/Cta"
import Introduccion from "./components/home/Introduction";
import Footer from "./components/Footer"

export default function Home() {
  return (
    
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero/>
      <Definition/>
      <Introduccion/>
      <Cursos/>
      <Cop/>
      <Cta/>
      <Footer/>
    </div>
  );
}
