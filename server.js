
/////HABILITANDO O CORS
const cors = require('cors')

/////CRIAR ROTA PARA ACESSAR API
const express = require('express') // o express foi instalado e essa é a forma de acessa-lo
const app = express() //inicia o express na variavel app

//BACKEND
//pegar o axios
const axios = require('axios')

///USANDO O CORS NA APLICAÇÃO APOS HABILITAR. sendo possivel agora liberar para qualquer pessoa
app.use(cors())

///SERVINDO A API
app.get('/', async(req, res) => { //3. async é acrescentado por await axios ser assincronno

    //3. response é a resposta do axios MAS eu tiro o data de dentro do response usando { data } a resposta aparece no terminal do vscode coma as informações que constam na API ('https://jsonplaceholder.typicode.com/users')
    try {
        
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')//3. o await axios vai fazer a promessa de ir pegar o endereço e retornar// esse response já tem o data, pode pegar usando response.data, por isso no lugar de const RESPONSE = await... usar { data }
      
    
        /*1.2 - cria rota -- app.get('/', async(req, res) => {...{}. quando for escrito no navegador o endereço http://localhost:4567/ sera rodado a FUNCTION OU ARROW FUNCTION / digita location.href = "http://localhost:4567/"  no console do navegador para aparecer a mensagem OKAY*/
        return res.json(data)  /*([ // retorna a mesnagem em formato json
            { cria um array com usuarios [{}{}{}] para ser consumido no frontend dentro do index.html
                name: 'Debora'
            },
            {
                name: 'Lucas'
            },
            {
                name: 'Maria'
            }
        ])*/ //3. agora em vez de enviar os objetos acima, envua somente o data ----return res.json(data) que retorna na tela os dados da API 'https://jsonplaceholder.typicode.com/users' de forma ordenada
    } catch (error) {
        console.error(error)
    }
})
app.listen('4567') //pega a funcao express que esta na variavel APP e indica qual porta ela deve ficar ouvindo

//CRIAR ROTA PARA ACESSAR API


/////CONSUMINDO NO FRONTEND
//utiliza o fetch para consumir a nosssa API location.href = "http://localhost:4567/" 

///..........................
//parte que está no html
////....................

/* instalar o LITE-SERVER NA PASTA DO PROJETO npm install lite-server --save-dev e configurar o packge.jason - scripts "start": "npm run lite",
    "lite": "lite-server" . Depois é só digitar no terminal npx lite-server
*/

/*para saber se a API está funcionando, digita no terminal --- node server.js ---, se estiver rodando nada acontece*/

/*para ler no console do navegador se a fetch está funcionando usar no terminal ---- npx lite-server ---. cria um servidor Local: http://localhost:3000 no navegador
    External: http://192.168.15.11:3000 para servir a API
    Por causa do [Browsersync] a pagina html será atualizada automaticamente sempre que houver alteração
*/


//apos habilitar o nodemon no package.json passa a chamar no terminal por npm start que passa a observar qualquer alteração no arquivo server.js e reiniciar o servidor

//ctrl+c cancela o node server.js