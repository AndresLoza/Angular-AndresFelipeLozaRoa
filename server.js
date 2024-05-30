const express = require('express');
const bodyParser = require('body-parser');
const { Andres } = require('./models');
 
const app = express();
app.use(bodyParser.json());
 
// Rutas
app.post('/users', async (req, res) => {
    try {
        const newUser = await Andres.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
});
 
app.get('/users', async (req, res) => {
    try {
        const users = await Andres.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).send(error);
    }
});
 
app.put('/users/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const [updated] = await Andres.update(req.body, {
          where: { id: id }
      });
      if (updated) {
          const updatedUser = await Andres.findOne({ where: { id: id } });
          res.status(200).json(updatedUser);
      } else {
          res.status(404).send("User not found");
      }
  } catch (error) {
      res.status(500).send(error);
  }
});
 
app.delete('/users/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const deleted = await Andres.destroy({
          where: { id: id }
      });
      if (deleted) {
          res.status(204).send("User deleted");
      } else {
          res.status(404).send("User not found");
      }
  } catch (error) {
      res.status(500).send(error);
  }
});
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));