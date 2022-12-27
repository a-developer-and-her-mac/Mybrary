const express = require('express');
const Author = require('../models/author');
const router = express.Router();

//All authors route
router.get('/', (req, res) => {
  res.render('authors/index')
});

//New author route
router.get('/new', (req, res) => {
  res.render('authors/new', {
    author: new Author()
  })
});

// Create new author route
router.post('/', (req, res) => {
  const author = new Author({
    name: req.body.name
  })
  author.save((err, newAuthor) => {
    if (err) {
      res.render('authors/new', {
        author: author,
        errorMessage: 'Error creating author'
      })
    } else {
      // res.redirect(`authors/${newAuthor.id}`);
      res.redirect('authors');
    }
  })
});
module.exports = router;