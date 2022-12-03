# SGM

Plataforma cujo objetivo é auxiliar aluno e professor durante o processo de Monitoria do IFAL - Campus Palmeira dos ìndios, desde o processo seletivo até o acompanhamento do monitor.

![Testar](https://img.shields.io/badge/-Testar-6A00E4?style=for-the-badge&labelColor=6A00E4&logo=Vercel&logoColor=white&link=https://www.linkedin.com/in/jaianeoliveira/)
![Testar](https://img.shields.io/badge/-Protótipo-6A00E4?style=for-the-badge&labelColor=6A00E4&logo=Figma&logoColor=white&link=https://www.linkedin.com/in/jaianeoliveira/)

## 👩🏽‍💻 Equipe de desenvolvimento

### Alunos
 📸 | Nome
| --- | --- |
 <img src='https://github.com/JaianeOliveira.png' height='30' /> | [Jaiane Oliveira](https://github.com/JaianeOliveira)
 <img src='https://github.com/MthGabriel.png' height='30' /> | [Matheus Gabriel](https://github.com/MthGabriel) 
 <img src='' height='30' /> | Isabel 
 <img src='https://github.com/vinibsilva.png' height='30' /> | Vinícius 
 <img src='https://github.com/EversonUlisses.png' height='30' /> | Everson 
 


### Professor Orientador
 📸 | Nome 
| --- | --- | 
 <img src='https://github.com/profitalo.png' height='30' /> | [Ítalo Arruda](https://github.com/profitalo) 

## 🚧 Como rodar o projeto na sua máquina

### Requisitos
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

Clone o projeto na sua máquina
```
$ git clone https://github.com/JaianeOliveira/sgm-next.git
```
em seguida, dentro da pasta do repositório clonado, instale as dependências do projeto com o comando
```
$ yarn
```
crie um arquivo `.env` que siga a estrutura de `.env.example` e preencha os campos. Em seguida execute os comandos para criar e popular o banco 

```
$ yarn db:push
```

```
$ yarn db:seed
```

agora é só executar com 
```
$ yarn dev
```
