const express = require('express');
const Users = require('../model/users');
const router = express.Router();

router.use(express.json());

router.get('/all', (req, res) => {
  try {
    Users.find((err, user) => {
      if (err) {
        res.send(err);
      }
      res.send(user);
    })

  } catch (err) {
    res.status(err.code).send(err.message)
  }
});

router.get('/:id', (req, res) => {
  var id = req.params.id;
  try {
    Users.findById(id, (err, user) => {
      if (err) {
        res.send(err);
      }
      res.send(user);
    })
  } catch (err) {
    res.status(err.code).send(err.message)
  }
});

router.post('/register', function (req, res) {
  try {
    const user = new Users({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    user.save(err => {
      if (err) {
        res.send(err);
      }
      res.send(user);
    });

  } catch (err) {
    return res.status(err.code).send({ error: 'erro ao registrar' });
  }
});

router.put('/:id', (req, res) => {
  var id = req.params.id;

  try {
    Users.findByIdAndUpdate(id, req.body, (err) => {
      if (err) {
        res.send(err);
      }
      res.send("usuario alterado");
    });

  } catch (err) {
    res.status(err.code).send(err.message);
  }
});

router.delete('/:id', (req, res) => {
  var id = req.params.id;

  try {
    Users.findByIdAndRemove(id, (err) => {
      if (err) {
        res.send(err);
      }
      res.send("Usuário excluido!");
    });

  } catch (err) {
    res.status(err.code).send({ error: "Erro ao excluir usuário" });
  }

});

module.exports = router;

