## CONSUMIR API ##

## CRIAR API
1. Iniciar o projeto `npm init -y`
    1.- npm é o gerenciador de pacote package.json ou configuração de dependencias do projeto(criado pelo comando acima)

1.1 Instalar as dependências `npm i express nodemon cors axios`
    1.1 -  i instala/ express ajuda a criar a API/ nodemon observa a API enquanto a API esta sendo modificada/ cors permite o acesso do frontend com a API

1.2 Criar uma rota para acessar a API
    1.2- CRIADO DENTRO DO ARQUIVO SERVER.JS

1.3 Servir a API
    1.2- SERVIDO DENTRO DO ARQUIVO SERVER.JS

1.4 Habilitar o CORS
    1.4 - CORS é um controle de acesso para quando um servidor esta conversando com o outro servidor, ou seja a nossa API não foi liberada para outros lugares que não seja para a 'http://localhost:4567/', quer dizer que não é possivel acessar a API direto pelo http://localhost:3000. Somente digitando no console do navegador location.href = 'http://localhost:4567/' ou no search do navegador 'http://localhost:4567/
     
    1.4 - Por isso é necessário habilitar o CORS dentro do server.js

1.5 Habilitar o nodemon para iniciar o server
    1.5 - habilitar o nodemon no package.json para que não precise ficar cancelando e rodando o node server.js, assim será automatico

////node server.js (no termial), se n der erro, ja está rodando o servidor


## CONSUMIR API - FRONTEND
2. Utilizar a fetch para consumir nossa API backend
2.1 Explicar Promise - Async/await
2.2 Usar try/catch
2.3 mostrar a resposta na tela

## CONSUMIR API - BACKEND
3. jasonplaceholder (https://jsonplaceholder.typicode.com/users) ----API DE BANCKEND

3.1 usar axios
3.2 semelhança entre axios e fetch
3.3 usar try/catch

