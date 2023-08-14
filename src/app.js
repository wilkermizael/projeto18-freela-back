import express from 'express'
import cors from 'cors'
import router from './routes/index.js'
const app = express()

//CONFIGURAÇÕES
app.use(cors())
app.use(express.json())

//ROTAS
app.use(router)


const port = process.env.PORT || 5001

app.listen(port, ()=>console.log(`Servidor rodando na porta ${port}`))