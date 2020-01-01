import  express from 'express';

const app = express();
import Routes from './routes';
app.use(express.json())
app.use(Routes)

app.listen(8080, console.log('Rodando na porta 8080'))