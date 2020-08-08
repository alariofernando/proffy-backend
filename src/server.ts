import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

// Importar para termos objeto json
app.use(cors());
app.use(express.json());
app.use(routes);

// GET: Buscar ou listar infos
// POST: Criar nova info
// PUT: Atualizar info existente
// DELETE: Deletar info

// localhost:3333
app.listen(3333);