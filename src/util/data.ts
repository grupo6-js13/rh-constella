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
    {
        id: 5,
        nome: 'Fernanda Costa',
        cargo: 'UX Designer',
        salario: 6500,
        data_ingresso: '2023-06-01'
    },
    {
        id: 6,
        nome: 'Lucas Pereira',
        cargo: 'Analista de Dados',
        salario: 7000,
        data_ingresso: '2022-08-15'
    },
    {
        id: 7,
        nome: 'Beatriz Souza',
        cargo: 'Scrum Master',
        salario: 9000,
        data_ingresso: '2021-03-20'
    },
    {
        id: 8,
        nome: 'Rafael Mendes',
        cargo: 'DevOps Engineer',
        salario: 9500,
        data_ingresso: '2021-07-10'
    },
    {
        id: 9,
        nome: 'Camila Rocha',
        cargo: 'QA Engineer',
        salario: 6800,
        data_ingresso: '2023-09-05'
    },
]

export default colaboradores