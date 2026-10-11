import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

// Endpoint simples para provar que o código roda no servidor
app.get('/api/saude', (req, res) => {
  res.json({ status: 'ok', servidor: 'node', horario: new Date().toISOString() })
})

app.use(express.static(path.join(__dirname, 'dist')))

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => console.log(`Servidor rodando na porta ${PORT}`))
