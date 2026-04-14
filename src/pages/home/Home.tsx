import { Link } from 'react-router-dom'
import { SparkleIcon, ArrowRightIcon, UsersIcon } from '@phosphor-icons/react'

function Home() {
    return (
        <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Hero */}
            <section className="relative overflow-hidden rounded-[3rem] bg-[#0a2e2e]/40 px-8 py-24 text-white border border-white/5 shadow-2xl">
                <div className="relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-[#8bff84]/10 text-[#8bff84] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-[#8bff84]/20">
                        <SparkleIcon weight="fill" className="w-4 h-4" />
                        Constella RH API v1.0
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
                        A Infraestrutura de <span className="text-[#8bff84]">Dados</span> para seu RH.
                    </h1>
                    <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light max-w-2xl">
                        O Constella RH é uma API backend desenvolvida para simular cenários corporativos reais, focada no registro e organização eficiente de colaboradores.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/gestao"
                            className="bg-[#8bff84] text-[#002423] px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white transition-all shadow-xl flex items-center gap-2"
                        >
                            Ver Colaboradores
                            <ArrowRightIcon size={20} />
                        </Link>
                    </div>
                </div>

                {/* Fundo decorativo */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[40rem] h-[40rem] bg-[#8bff84]/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </section>

            {/* Stats Grid */}
            <section>
                <h2 className="text-4xl font-bold text-white mb-4">Monitoramento de Dados</h2>
                <p className="text-slate-400 text-lg mb-12">Status da base de registros do Constella.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-[#0a2e2e]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                        <div className="p-5 rounded-2xl bg-[#8bff84]/20 text-[#8bff84] border border-[#8bff84]/30 w-fit mb-10">
                            <UsersIcon size={28} />
                        </div>
                        <p className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-[0.25em]">Total de Colaboradores</p>
                        <h3 className="text-6xl font-bold text-white font-mono tracking-tighter mb-6">3000</h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em]">Aguardando conexão</p>
                    </div>

                    <div className="bg-[#0a2e2e]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                        <div className="p-5 rounded-2xl bg-emerald-400/20 text-emerald-400 border border-emerald-400/30 w-fit mb-10">
                            <UsersIcon size={28} />
                        </div>
                        <p className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-[0.25em]">Cargos Cadastrados</p>
                        <h3 className="text-6xl font-bold text-white font-mono tracking-tighter mb-6">27</h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em]">Aguardando conexão</p>
                    </div>

                    <div className="bg-[#0a2e2e]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                        <div className="p-5 rounded-2xl bg-amber-400/20 text-amber-400 border border-amber-400/30 w-fit mb-10">
                            <UsersIcon size={28} />
                        </div>
                        <p className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-[0.25em]">Média Salarial</p>
                        <h3 className="text-6xl font-bold text-white font-mono tracking-tighter mb-6">8000</h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em]">Aguardando conexão</p>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Home