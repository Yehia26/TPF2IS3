import  express  from 'express';
import axios from 'axios';

// instancier l'API ou l'objet qui va nous servir à écouter les requettes
const app = express();
const port = 3000;

app.get('/users', ()=> {
    console.log('page d\'acceuil')
    return "Salut !"
})

// créer l'API
app.listen(port, ()=> console.log('le serveur est bien lancé'));