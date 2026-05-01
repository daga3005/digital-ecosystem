
import HeroApp from "./components/home/Hero-App";
import Definition from "./components/home/Definition"
import Cursos from "./components/home/Cursos"
import Cop from "./components/home/Cop"
import Cta from "./components/home/Cta"
import Introduccion from "./components/home/Introduction";
import Footer from "./components/home/Footer"
import { Video1, Video2 } from "./components/home/Videos";

export default function Home() {
  return (
    
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroApp/>
      <Definition/>
      <Video1/>
      <Introduccion/>
      <Cursos/>
      <Video2/>
      <Cop/>
      <Cta/>
      <Footer/>
    </div>
  );
}
