import { Link } from 'react-router-dom'
import { SparkleIcon, HouseIcon, InfoIcon, BriefcaseIcon } from '@phosphor-icons/react'

function Navbar() {
    return (
        <nav className="bg-[#021a1a]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    <Link to="/home" className="flex items-center gap-3">
                        <div className="bg-[#8bff84] p-2.5 rounded-2xl shadow-xl">
                            <SparkleIcon weight="fill" className="w-6 h-6 text-[#002423]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white leading-none">Constella</span>
                            <span className="text-[10px] font-bold text-[#8bff84] uppercase tracking-[0.2em] mt-1">RH System</span>
                        </div>
                    </Link>

                    <div className="flex justify-between gap-8">
                        <Link to="/home" className="flex items-center gap-2 px-1 py-2 text-sm font-semibold text-slate-400 hover:text-[#8bff84] transition-all duration-300">
                            <HouseIcon size={16} />
                            Início
                        </Link>
                        <Link to="/gestao" className="flex items-center gap-2 px-1 py-2 text-sm font-semibold text-slate-400 hover:text-[#8bff84] transition-all duration-300">
                            <BriefcaseIcon size={16} />
                            Gestão
                        </Link>
                        <Link to="/sobre" className="flex items-center gap-2 px-1 py-2 text-sm font-semibold text-slate-400 hover:text-[#8bff84] transition-all duration-300">
                            <InfoIcon size={16} />
                            Sobre
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar