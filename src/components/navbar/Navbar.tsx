import { Link } from 'react-router-dom'
import { SparkleIcon, HouseIcon, InfoIcon } from '@phosphor-icons/react'

function Navbar() {
    return (
        <nav className="bg-cosmic-bg/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    <Link to="/home" className="flex items-center gap-3 group">
                        <div className="bg-accent p-2.5 rounded-2xl shadow-xl shadow-accent/20">
                            <SparkleIcon weight="fill" className="w-6 h-6 text-primary-deep" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white leading-none">Constella</span>
                            <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mt-1">RH System</span>
                        </div>
                    </Link>

                    <div className="flex items-center gap-8">
                        <Link to="/home" className="nav-link">
                            <HouseIcon size={16} />
                            Início
                        </Link>
                        <Link to="/sobre" className="nav-link">
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