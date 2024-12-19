import  express  from 'express';
import Router from './routes/ExercicesRoutes.js';


const app = express();
const port = 3000
app.use(Router)



app.listen(port, ()=> {
    console.log(`le serveur est lancé au port http://localhost:${port}`)
})