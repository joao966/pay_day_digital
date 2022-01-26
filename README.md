## 💻 Sobre o projeto

 API REST com algumas funções essenciais relacionadas ao gerenciamento de contas bancárias. A API POSSUI DOIS END-POINTS COM VALIDAÇÕES.

Os usuários poderão:

- Criar Conta.
- Fazer Trânsferencias.
- Fazer Depósitos.

🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

* NodeJs
* Express
* MongoDB
* JOI


## LINK

- LINK REPOSITÓRIO: https://github.com/joao966/pay_day_digital



## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter o [Git](https://git-scm.com) instalado em sua máquina.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

OBS: Inicialize o projeto com o comando:

    npm start


OBS: Para executar os testes execute o comando:

     npm test

* /acount
Este endpoint é capaz de criar contas. Forneça o payload corretamente:

 payload:   name: string maior de 5 caracteres.
            CPF: string maior com no mínimo 11 caracteres.  
            Observação: Estes campos não podem ser vazios!


* /transactions
Este endpoint é capaz de criar contas. Forneça o payload corretamente:

 payload:   CPForigin: string maior com no mínimo 11 caracteres >  Este campo não pode ser vazio!
            CPFdestiny: string maior com no mínimo 11 caracteres > Este campo não pode ser vazio!.
            descripition: string de no mínimo um caractere > Este campo é opcional!.
            

