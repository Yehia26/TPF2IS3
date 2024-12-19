import  express  from 'express';
const app = express();
const port = 3000;
import{ ControllerDifficulty, ControlllerType } from './controllers/controllers.js';



app.get('/',  async ()=> {
  
    
})
// // Recupérer selon le type d'exercices
app.get('/type/:type', ControlllerType )


// // Recup selon le niveau d'exercice
// app.get('/difficulty/:level', ControllerDifficulty)

// // Recup les exercices selon le muscle ciblé
// app.get('/muscle/:muscle', Controller)
app.listen(port, ()=> console.log(`le serveur est bien lancé au port http://localhost:${port}`));