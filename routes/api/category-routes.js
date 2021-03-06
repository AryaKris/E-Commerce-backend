const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({include:Product})
  .then(function(data){
  res.json(data) 

  } )
  .catch(function(err){
    res.json(err)

  })

 
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({ include: Product, where:{id:req.params.id} })
    .then(function (data) {
      res.json(data)

    })
    .catch(function (err) {
      res.json(err)

    })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(function(data){
    res.json(data)
  })
  .catch(function(err){
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where: { id: req.params.id }})
    .then(function (data) {
      res.json(data)
    })
    .catch(function (err) {
      res.json(err)
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy( {where: { id: req.params.id }})
    .then(function (data) {
      res.json(data)
    })
    .catch(function (err) {
      res.json(err)
    })
});

module.exports = router;
