import { Link } from 'react-router-dom'
import { SparkleIcon } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <footer className="bg-[#021a1a]/80 border-t border-white/5 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="flex items-center gap-3">
                        <div className="bg-[#8bff84] p-2 rounded-xl shadow-lg">
                            <SparkleIcon weight="fill" className="w-5 h-5 text-[#002423]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-white leading-none">Constella</span>
                            <span className="text-[9px] font-bold text-[#8bff84] uppercase tracking-widest mt-1">RH System</span>
                        </div>
                    </div>

                    <p className="text-white/40 text-sm font-medium">
                        © {data} Constella RH — Desenvolvido por Grupo 6
                    </p>

                    <div className="flex gap-8 text-sm font-bold text-white/60">
                        <Link to="/sobre" className="hover:text-[#8bff84] transition-colors">Sobre</Link>
                        <a href="https://github.com/grupo6-js13" target="_blank" rel="noreferrer" className="hover:text-[#8bff84] transition-colors">GitHub</a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer