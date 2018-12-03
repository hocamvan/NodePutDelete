var express = require('express');
var router = express.Router();


router.get('/:prenom(\[a-z]+)', function(req, res, next) {
  res.render('update-user', {prenom : req.params.prenom});
});

router.put('/:prenom(\[a-z]+)', function(req, res, next) {
  res.send('The new name is '+ req.params.prenom);
});

router.get('/:id(\\d+)', function(req, res, next) {
  res.render('delete-user', {id: req.params.id});
});

router.delete('/:id(\\d+)', function(req, res, next) {
  res.send('No more user with id '+ req.params.id);
});

module.exports = router;

