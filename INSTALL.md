### Estrutura

A aplicação é composta por duas estruturas:

**************Backend************** → (/backend) Uma API restful

****Front-end →**** (/FrontEnd) Uma estrutura de páginas em formato html

Prerequisitos:

- Node

### Passo a passo API

1. Clonar o repositório para o computador
    
    ```jsx
    git clone https://github.com/jgabrielsn/Projeto-de-Engenharia-de-Software.git
    ```
    
2. Abrir pasta do repositório em uma IDE 
3. Entrar na pasta ‘/backend’ via terminal
    
    ```jsx
    cd backend
    ```
    
4. Instalar dependências
    
    ```jsx
    npm install 
    ```
    
5. Criar arquivo com variáveis de ambiente (.env), exemplo: 
    
    ```jsx
    PORT=3000
    MYSQL_HOST=database-1.cph3keliv8la.sa-east-1.rds.amazonaws.com
    MYSQL_USER=admin
    MYSQL_PASSWORD=projetoes
    MYSQL_DATABASE=Budget
    MYSQL_PORT= 3066
    ```
    
6. Gerar chaves públicas e privadas (comandos no terminal)
    
    ```jsx
    cd src 
    node generateKeyPairs.js 
    cd..
    ```
    

 8. Rodar o servidor

```jsx
npm start
```

### Passo a passo Front-end

1. Abrir com o browser o arquivo base html
    
    ```jsx
    FrontEnd\welcome.html
    ```
   Ou, pode instalar a extensão Live Server, com ela ja funcionando, clique com o botão direito no arquivo do FrontEnd, welcome.html, e clicar na opção "Open with Live Server".
