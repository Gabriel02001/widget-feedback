
import express from 'express'
import { routes } from './routes';
import cors from 'cors'

const app = express();
// é um controle de segurança para que a gente não permita que frontend inadequados acessem as informaçoes do nosso backend
// com o cors podemos decidir quais endereços front end podem acessar o nosso backend
app.use(cors()) // dessa maneira aqui não está seguro qualquer front pode acessar nossa aplicação


// app.use(cors({  em produção precisamos definir os pontos de origem
// origin: 'http://localhost:3000 '
// })) 

app.use(express.json())
app.use(routes);







app.listen(3333, () => {
    console.log('HTTP server running..')
})