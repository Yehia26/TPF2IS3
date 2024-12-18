import  express  from 'express';
const app = express();
const port = 3000;

app.get('/users', ()=> {
    console.log('page d\'acceuil')
    return "Salut !"
})
app.listen(port, ()=> console.log('le serveur est bien lancé'));