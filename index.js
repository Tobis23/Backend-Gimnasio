const express = require ('express');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors())

const miembros = [
     {id: 1, user: 'Matiaz', email:'Matias1@gmail.com', password:'pirata123'},
     {id: 2, user:'Martin', email:'Martin2@gmail.com', password:'cory123'},
     {id: 3, user:'Pablo', email:'Pablo3@gmail.com', password:'kira123'},

];

app.get('/', (req, res) => {
    res.send('Node JS  api');
});

app.get('/api/miembros', (req , res)=> {
    res.send(miembros);
});

app.get('/api/miembros/:id', (req , res)=> {
    const miembro = miembros.find(c => c.id === parseInt(req.params.id));
    if(!miembro) return res.status(404).send('Miembro no encontrado');
    else res.send(miembro);
});

app.post('/api/miembros', (req, res) =>{
    const miembro = {
        id: miembros.length + 1,
        user: req.body.user,
        email: req.body.email,
        password: req.body.password,
    };

    miembros.push(miembro);
    res.send(miembro);
});


app.delete('/api/miembros/:id', (req, res) => {
    const miembro = miembros.find(c => c.id === parseInt(req.params.id));
    if (!miembro) return res.status(404).send ('Miembro no encontrado');

    const index = miembros.index0f(miembro);
    miembros.splice(index, 1);
    res.send(miembro);
});



const port = process.env.port || 80;
app.listen(port,() => console.log(`Escuchando en puerto ${port}...`));