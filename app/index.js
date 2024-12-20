import  express  from 'express';
import Router from './routes/ExercicesRoutes.js';
import cors from 'cors'


const app = express();
const port = 3000
app.use(Router)

app.use(cors({origin: 'http://localhost:5173'}))

app.listen(port, ()=> {
    console.log(`le serveur est lancé au port http://localhost:${port}`)
})