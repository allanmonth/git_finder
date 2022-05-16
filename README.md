
# Git Finder

Projeto que consiste em consumir a API do Github e retornar o perfil de um usuário da plataforma.


## Sobre o projeto

Como dito anteriormente, este projeto consome a API do Github. O usuário digita um @ do github e a aplicação retorna os dados da pessoa procurada.
É retornado dados como: Foto de perfil do usuário, nome, biografia, quantidade de repositórios e seguidores. Além disso, é gerado o @ do usuário,
que ao ser clicado, redireciona o usuário ao perfil do mesmo.
Disponível em 2 idiomas: Português e Inglês.


## Demonstração

Veja abaixo uma foto do projeto.
[![Image from Gyazo](https://i.gyazo.com/dcf3d55996d999aebe436733ff3ac692.png)](https://gyazo.com/)

Você pode conferir o resultado final em: https://gitfinder.allanmonth.vercel.app/


## Objetivo do projeto

Foi realizado este projeto com o intuito de aplicar os conhecimentos sobre requisições HTTPS. Além disso, foi desenvolvido para aperfeiçoar os
conhecimentos em Next.js e TypeScript.


## Stack utilizada

Para a realização desse projeto foram utilizadas as seguintes tecnologias/linguagens:
- [Next.js](https://nextjs.org/)
- [GitHub Polyglot](https://github.com/IonicaBizau/node-gh-polyglot)
- [Chart.js](https://www.chartjs.org/)
- [React Flip Move](https://github.com/joshwcomeau/react-flip-move)
- [Styled Components](https://www.styled-components.com/)
- [React Intl Universal](https://github.com/alibaba/react-intl-universal)


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/allanmonth/git_finder
```

Entre no diretório do projeto

```bash
  cd git_finder
```

Instale as dependências

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn dev
```
Abra http://localhost:3000 no seu navegador para visualizar o projeto.
