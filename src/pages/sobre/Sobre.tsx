import { GithubLogoIcon, LinkedinLogoIcon, TargetIcon, HeartIcon, ShieldIcon, LightningIcon } from '@phosphor-icons/react'

function Sobre() {

    const valores = [
        { icon: TargetIcon, titulo: 'Missão', desc: 'Simplificar a gestão de pessoas através de tecnologia intuitiva e design focado no usuário.' },
        { icon: HeartIcon, titulo: 'Propósito', desc: 'Valorizar o capital humano, permitindo que gestores foquem no que realmente importa: as pessoas.' },
        { icon: ShieldIcon, titulo: 'Segurança', desc: 'Garantir a integridade e privacidade dos dados sensíveis de todos os colaboradores.' },
        { icon: LightningIcon, titulo: 'Eficiência', desc: 'Otimizar processos burocráticos para transformar o RH em um setor estratégico.' },
    ]

    const time = [
        { nome: 'Jeaninny', cargo: 'Developer', bio: 'Código limpo e soluções práticas.', github: 'https://github.com/jeaninny', linkedin: 'https://www.linkedin.com/in/jeaninnyteixeira', foto: 'https://github.com/jeaninny.png' },
        { nome: 'Sofia', cargo: 'Developer', bio: 'Cria experiências digitais memoráveis.', github: 'https://github.com/frsofitware', linkedin: 'https://www.linkedin.com/in/sofia-sabrina-silva', foto: 'https://github.com/frsofitware.png' },
        { nome: 'Jhonatha', cargo: 'Developer', bio: 'Especialista em arquitetura de sistemas escaláveis.', github: 'https://github.com/Bfr-Jhon', linkedin: 'https://www.linkedin.com/in/jhonatha-oliveira', foto: 'https://github.com/Bfr-Jhon.png' },
        { nome: 'Josué', cargo: 'Developer', bio: 'Foco em performance e qualidade de código.', github: 'https://github.com/Josue-Bravo', linkedin: 'https://www.linkedin.com/in/josue-bravo', foto: 'https://github.com/Josue-Bravo.png' },
        { nome: 'Marcus', cargo: 'Developer', bio: 'Responsável pela infraestrutura e deploy do projeto.', github: 'https://github.com/mwendellsmce', linkedin: 'https://www.linkedin.com/in/marcus-wendell', foto: 'https://github.com/mwendellsmce.png' },
    ]

    return (
        <div className="py-12 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <section className="text-center max-w-3xl mx-auto space-y-8">
                <span className="text-[#8bff84] font-bold tracking-[0.3em] text-xs uppercase">
                    Sobre o Projeto
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1]">
                    Constella: A <span className="text-[#8bff84]">Simulação</span> de Backend Corporativo.
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed font-light">
                    O Constella RH é uma API backend desenvolvida para simular um cenário comum em ambientes corporativos: o registro e organização de informações de colaboradores.
                </p>
            </section>

            {/* Valores */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {valores.map((valor) => {
                    const Icon = valor.icon
                    return (
                        <div
                            key={valor.titulo}
                            className="bg-[#0a2e2e]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-500 group"
                        >
                            <div className="w-14 h-14 bg-[#8bff84]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#8bff84] transition-all duration-500 text-[#8bff84] group-hover:text-[#002423]">
                                <Icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{valor.titulo}</h3>
                            <p className="text-slate-400 leading-relaxed font-light">{valor.desc}</p>
                        </div>
                    )
                })}
            </section>

            {/* Time */}
            <section className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold text-white">O Time por trás da Constella</h2>
                    <p className="text-slate-400 text-lg">Desenvolvedores apaixonados por transformar dados complexos em soluções intuitivas.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {time.map((membro) => (
                        <div
                            key={membro.nome}
                            className="bg-[#0a2e2e]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-all duration-500"
                        >
                            <img
                                src={membro.foto}
                                alt={membro.nome}
                                className="w-20 h-20 rounded-full object-cover border border-[#8bff84]/10"
                            />

                            <div>
                                <h3 className="text-lg font-bold text-white">{membro.nome}</h3>
                                <span className="text-xs font-bold text-[#8bff84] uppercase tracking-widest">{membro.cargo}</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed font-light">{membro.bio}</p>
                            <div className="flex gap-4 mt-2 fixed bottom-0 pb-2">
                                <a href={membro.github} className="text-slate-500 hover:text-[#8bff84] transition-colors">
                                    <GithubLogoIcon size={20} />
                                </a>
                                <a href={membro.linkedin} className="text-slate-500 hover:text-[#8bff84] transition-colors">
                                    <LinkedinLogoIcon size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Sobre