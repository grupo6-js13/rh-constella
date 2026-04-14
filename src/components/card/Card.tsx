import type { Colaborador } from "../../util/data"

interface CardProps {
    colab: Colaborador
    modoLista?: boolean
}

function Card({ colab, modoLista = false }: CardProps) {
    return (
        <div className={`bg-[#0a2e2e]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${modoLista ? 'flex flex-row items-center gap-8' : 'flex flex-col gap-6'}`}>
            <div className="w-14 h-14 rounded-2xl bg-[#8bff84]/20 flex items-center justify-center text-[#8bff84] font-bold text-xl border border-[#8bff84]/10 shrink-0">
                {colab.nome.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
            </div>
            <div className={`flex ${modoLista ? 'flex-row items-center justify-between gap-8 flex-1' : 'flex-col gap-6'}`}>
                <div className="flex flex-col gap-1 min-w-[160px]">
                    <h2 className="text-xl font-bold text-white">{colab.nome}</h2>
                    <span className="text-xs font-bold text-[#8bff84] uppercase tracking-widest">{colab.cargo}</span>
                </div>
                <div className={`flex ${modoLista ? 'flex-row gap-8 justify-end flex-1' : 'flex-col gap-2 pt-2 border-t border-white/5'}`}>
                    <p className="text-sm text-slate-400 font-medium">
                        Salário: <span className="text-white font-semibold">
                            {colab.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                    </p>
                    <p className="text-sm text-slate-400 font-medium">
                        Ingresso: <span className="text-white font-semibold">
                            {new Date(colab.data_ingresso).toLocaleDateString('pt-BR')}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card