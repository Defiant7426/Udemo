import { useState } from 'react'
import Xicon from '../../../icons/Xicon'

export default function BandaPromocional() {
  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="relative w-full bg-morado-banda h-auto text-white font-nurito flex items-center justify-center text-sm lg:text-base">
      <div className="px-8 py-4">
        <span className="font-black">¿Quieres ponerte al día? </span>
        <span className="mx-1">|</span>
        <span className="font-semibold">
          Adquiere las habilidades con Udemo Business.
        </span>
      </div>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white hover:text-fuchsia-200"
        onClick={handleClick}
      >
        <Xicon className=" w-4" stroke="3"></Xicon>
      </button>
    </div>
  )
}
