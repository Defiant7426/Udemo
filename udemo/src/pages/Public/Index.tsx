import BandaPromocional from "./components/BandaPromocional";
import DynamicBG from "./components/DynamicBG";
import Header from "./components/Header";


export default function Home() {
  return (
    <>
       <BandaPromocional />
       <Header />
       <main className="relative lg:w-full lg:relative lg:flex lg:justify-center lg:items-center">
  <DynamicBG />
</main>
    </>
  )
}
