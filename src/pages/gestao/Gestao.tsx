import colaboradores from '../../util/data'
import type { Colaborador } from '../../util/data'
import Card from '../../components/card/Card'
import { useState } from 'react'
import { SquaresFourIcon, ListIcon } from '@phosphor-icons/react'

function Gestao() {
    const [modoTabela, setModoTabela] = useState(false)

    return (
        <div className="py-8 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-white">Console de Gerenciamento</h1>
                    <p className="text-slate-400 font-medium">Interface administrativa para manipulação de registros da API Constella.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#8bff84] bg-[#8bff84]/10 px-4 py-2 rounded-xl border border-[#8bff84]/20">
                        Sistema Operacional
                    </div>
                    <button
                        onClick={() => setModoTabela(false)}
                        className={`p-2 rounded-xl border transition-all ${!modoTabela ? 'bg-[#8bff84]/20 border-[#8bff84]/30 text-[#8bff84]' : 'border-white/10 text-slate-400 hover:text-white'}`}
                    >
                        <SquaresFourIcon size={20} />
                    </button>
                    <button
                        onClick={() => setModoTabela(true)}
                        className={`p-2 rounded-xl border transition-all ${modoTabela ? 'bg-[#8bff84]/20 border-[#8bff84]/30 text-[#8bff84]' : 'border-white/10 text-slate-400 hover:text-white'}`}
                    >
                        <ListIcon size={20} />
                    </button>
                </div>
            </div>

            {modoTabela ? (
                <div className="flex flex-col gap-4">
                    {colaboradores.map((colaborador: Colaborador) => (
                        <Card key={colaborador.id} colab={colaborador} modoLista={true} />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {colaboradores.map((colaborador: Colaborador) => (
                        <Card key={colaborador.id} colab={colaborador} />
                    ))}
                </div>
            )}

        </div>
    )
}

export default Gestao