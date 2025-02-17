import BandaPromocional from "./components/BandaPromocional";
import DynamicBG from "./components/DynamicBG";
import Header from "./components/Header";
import ProfessionalSkills from "./components/ProfessionalSkills";


export default function Home() {
  return (
    <>
       <BandaPromocional />
       <Header />
       <main className="relative lg:w-full lg:relative lg:flex lg:justify-center lg:items-center">
          <DynamicBG />
       </main>
       <section className="w-full flex justify-center items-center">
         <ProfessionalSkills />
       </section>
       
    </>
  )
}
