import HeroApp from "../components/home/Hero-App";
import Definition from "../components/home/Definition"
import Fuentes from "../components/home/Fuentes"
import Cop from "../components/home/Cop"
import Cta from "../components/home/Cta"
import Introduccion from "../components/home/Introduction";
import Footer from "../components/home/Footer"




export default function Dashboard() {
  return (
    
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroApp/>
      <Definition/>
      
      <Introduccion/>
      <Fuentes/>
      
      <Cop/>
      <Cta/>
      <Footer/>
    </div>
  );
}
