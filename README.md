# Constella RH - Frontend

<br />

<div align="center">
    <img src="https://ik.imagekit.io/jeaninny/constella-rh-logo.png" title="source: imagekit.io"/>
</div>


<br /><br />

## 1. Descrição

O **Constella RH** é uma aplicação Frontend desenvolvida em React. A aplicação demonstra, de forma clara e funcional, como sistemas podem registrar e gerenciar informações de colaboradores, refletindo princípios fundamentais da engenharia de software como organização, clareza de dados e arquitetura simples.

---

## 2. Recursos

1. Página Home com apresentação do sistema e monitoramento de dados
2. Página Sobre com informações do projeto e do time de desenvolvimento
3. Console de Gerenciamento com listagem de colaboradores
4. Alternância entre visualização em grid e em lista
5. Interface responsiva com design moderno e paleta de cores consistente

---

## 3. Capturas de Tela



<div align="center">
    <img src="mudar" title="source: imgur.com" width="50%"/>
</div>

---

## 4. Tecnologias

| Item                         | Descrição  |
| ---------------------------- | ---------- |
| **Servidor**                 | Node JS    |
| **Linguagem de programação** | TypeScript |
| **Biblioteca**               | React JS   |
| **Build**                    | Vite       |
| **Framework de Estilização** | Tailwind CSS v4 |
| **Ícones**                   | Phosphor Icons |

---

## 5. Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/)
- API NestJS ([Repositório da API](https://github.com/grupo6-js13/rh_backend))

---

## 6. Configuração e Execução

1. Clone o repositório do Projeto
2. Instale as dependências: `npm install`
3. Clone o repositório do Projeto Backend: [Link](https://github.com/grupo6-js13/rh_backend)
4. Siga as instruções de **Configuração e Execução** descritas no README do Projeto Backend
5. Crie um arquivo `.env` na raiz do projeto e adicione a variável:
```
VITE_API_URL=http://localhost:3000
```
6. Execute o Projeto React: `npm run dev`
7. A aplicação React estará disponível no endereço: `http://localhost:5173`

---

## 7. Estrutura do Projeto

```plaintext
src/
│
├── components/       # Componentes reutilizáveis
│   ├── card/         # Card de colaborador
│   ├── footer/       # Rodapé da aplicação
│   └── navbar/       # Barra de navegação
│
├── pages/            # Páginas da aplicação
│   ├── gestao/       # Console de gerenciamento
│   ├── home/         # Página inicial
│   └── sobre/        # Página sobre o projeto e o time
│
├── util/             # Dados e interfaces da aplicação
│   └── data.ts       # Interface Colaborador e dados de teste
│
├── App.css           # Estilos globais do App
├── App.tsx           # Componente principal e configuração de rotas
├── index.css         # Estilos globais e importação do Tailwind
└── main.tsx          # Ponto de entrada da aplicação
```

---

## 8. Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch com a sua feature (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça um push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

---

## 9. Autores

**Orbyte - Onde as ideias orbitam em torno de conhecimento e tecnologia**

🔗 **GitHub:** https://github.com/grupo6-js13/
🔗 **E-mail:** grupo6js13@gmail.com