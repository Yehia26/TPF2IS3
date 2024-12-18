import  express  from 'express';
const app = express();
const port = 3000;
import ApiServe from './services/Api-server';

const ExercicesApi = new ApiServe();


app.get('/', ()=> {
    console.log('page d\'acceuil')
    return "Salut !"
})
// Recupérer le type d'exercices
app.get('/type/type:name', (req, res) => {
    ExercicesApi.getMarque(req.params.name)
})

// Recup selon le niveau d'exercice

app.get('/difficulty/:level')
app.listen(port, ()=> console.log('le serveur est bien lancé'));