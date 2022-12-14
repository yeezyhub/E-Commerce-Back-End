const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  }).then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'No tags found.' });
      return;
    }
    res.json(tag);
  }).catch(err => {
    if (err) throw err; //if it gives error, throws out
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  }).then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'No tags found.' });
      return;
    }
    res.json(tag);
  }).catch(err => {
    if (err) throw err; //if it gives error, throws out
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }).then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'No tags found.' });
      return;
    }
    res.json(tag);
  }).catch(err => {
    if (err) throw err; //if it gives error, throws out
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'No tags found.' });
      return;
    }
    res.json(tag);
  }).catch(err => {
    if (err) throw err; //if it gives error, throws out
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'No tags found.' });
      return;
    }
    res.json(tag);
  }).catch(err => {
    if (err) throw err; //if it gives error, throws out
  });
});

module.exports = router;
