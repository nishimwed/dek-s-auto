const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());


// J'accepte toutes requêtes venant de mon localhost:8080
app.use(cors({
  origin: 'http://localhost:8080' 
}));

app.get('/api/message', (req, res) => {
  res.json({ message: 'https://images.ctfassets.net/uaddx06iwzdz/1sfLB4IrdwYgUAZBoT3phQ/5cde5764f2813e686f5fc54980099161/bmw-x4-l-02.jpg' });
});
const items = [
  { id: 1, name: 'Peugeot Focus' },
  { id: 2, name: 'Porshe 911' },
];
app.get('/api/items', (req, res) => {
  res.json(items);
});




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/maroute/plusderoute', (req, res) => {
  const value = req.query.value;
  res.send(`Received value: ${value}`);
});



app.post('/api/add-item', (req, res) => {
  // Accéder aux données envoyées dans la requête POST via req.body
  const newItem = req.body;
  console.log(newItem); // Traiter l'item reçu (comme l'ajouter dans une base de données)

  // Envoyer une réponse au client
  res.status(201).send('Item ajouté avec succès');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
