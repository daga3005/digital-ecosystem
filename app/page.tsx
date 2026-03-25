
import Hero from "./components/Hero";
import Definition from "./components/Definition"
import Components from "./components/Components"
import Cop from "./components/Cop"
import Cta from "./components/Cta"

export default function Home() {
  return (
    
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero/>
      <Definition/>
      <Components/>
      <Cop/>
      <Cta/>
    </div>
  );
}
