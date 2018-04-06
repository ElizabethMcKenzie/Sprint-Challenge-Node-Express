const express = require('express');
const router = express.Router();
const db = require('./../data/helpers/projectModel.js');

router.get('/', (req, res) => {
  db
    .get()
    .then(actions => {
      res.json(actions);
    })
    .catch(error => {
      res.status(500).json({ error: 'Unable processing actions' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db
    .get(id)
    .then(action => {
      res.json(action);
    })
    .catch(error => {
      res.status(500).json({ error: 'Unable to process user.' });
    });
});
module.exports = router;
