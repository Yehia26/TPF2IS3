import  express  from 'express';
import Router from './routes/ExercicesRoutes.js';
import cors from 'cors'
import {fileURLToPath} from 'url'
import path from 'path'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({path: path.resolve(__dirname,'..', '.env')})


const app = express();
const port = process.env.PORT || 3001
app.use(Router)

app.use(cors({origin: 'http://localhost:5173'}))

app.listen(port, ()=> {
    console.log(`le serveur est lancé au port ${process.env.PORT} http://localhost:${port}`)
})