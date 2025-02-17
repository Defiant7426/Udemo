import GlobeIcon from "../../../icons/GlobeIcon";
import LogoIcon from "../../../icons/LogoIcon";
import LupaIcon from "../../../icons/LupaIcon";
import ShoppingCar from "../../../icons/ShoppingCar";
import ThreeBarsIcon from "../../../icons/ThreeBarsIcon";

export default function Header() {
  return (
    <header className="relative flex text-sm items-center shadow-lg shadow-sombra py-4 lg:py-9 justify-between">
      {/* Menú móvil */}
      <ThreeBarsIcon
        className="w-6 mx-3 text-iconos lg:hidden cursor-pointer"
        stroke="2"
      />

      {/* Logo clickeable */}
      <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-20">
        <a href="#">
          <LogoIcon className="w-[75px] lg:w-[95px]" stroke="" />
        </a>
      </div>

      {/* Sección central (solo en pantallas medianas o mayores) */}
      <div className="absolute hidden lg:flex left-36 min-w-5xl items-center space-x-1">
        <a
          href="#"
          className="px-4 py-3.5 rounded hover:bg-purple-100 hover:text-purple-700 cursor-pointer"
        >
          Explorar
        </a>

        <div className="relative">
          <LupaIcon
            className="absolute w-4 h-4 left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            stroke="2"
          />
          <input
            type="text"
            placeholder="Buscar cualquier cosa..."
            className="pl-9 pr-3 py-3.5 rounded-full xl:w-2xl border border-gray-400 hover:bg-gray-100 focus:border-purple-500 focus:outline-none focus:hover:bg-white"
          />
        </div>

        <a
          href="#"
          className="px-3 py-3.5 ml-2 rounded hover:bg-purple-100 hover:text-purple-700 cursor-pointer"
        >
          Udemo Business
        </a>
        <a
          href="#"
          className="px-3 py-3.5 rounded hover:bg-purple-100 hover:text-purple-700 cursor-pointer"
        >
          Enseña en Udemo
        </a>
      </div>

      {/* Sección derecha */}
      <div className="mx-3 flex items-center space-x-3 lg:absolute lg:right-1">
        <LupaIcon
          className="w-5 h-5 text-iconos lg:hidden cursor-pointer"
          stroke="2"
        />
        <a href="#" className="hover:bg-hover-icon rounded-md p-3 text-iconos hover:text-registro">
          <ShoppingCar className="w-5 h-5  cursor-pointer" stroke="2" />
        </a>
        <button className="hidden font-bold lg:inline-flex items-center justify-center px-3 py-2.5 rounded-md border border-registro text-registro bg-white hover:bg-purple-50">
          Iniciar Sesión
        </button>
        <button className="hidden font-bold lg:inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-registro text-white hover:bg-purple-700">
          Registrate
        </button>
        <a
          href="#"
          className="hidden lg:inline-flex bg-white border border-purple-600 p-2 rounded hover:bg-[#EDE5F9] cursor-pointer"
        >
          <GlobeIcon className="w-[24px] text-iconos" stroke="2" />
        </a>
      </div>
    </header>
  );
}