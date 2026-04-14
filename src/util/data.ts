export interface Colaborador {
    id: number,
    nome: string,
    cargo: string,
    salario: number,
    data_ingresso: string
}

const colaboradores: Colaborador[] = [
    {
        id: 1,
        nome: 'Ana Oliveira',
        cargo: 'Product Manager',
        salario: 8500,
        data_ingresso: '2023-01-15'
    },
    {
        id: 2,
        nome: 'Carlos Santos',
        cargo: 'Desenvolvedor Frontend',
        salario: 7200,
        data_ingresso: '2023-03-10'
    },
    {
        id: 3,
        nome: 'Mariana Lima',
        cargo: 'Analista de RH',
        salario: 5800,
        data_ingresso: '2022-11-20'
    },
    {
        id: 4,
        nome: 'Roberto Silva',
        cargo: 'Desenvolvedor Backend',
        salario: 7800,
        data_ingresso: '2022-05-05'
    },
]

export default colaboradores