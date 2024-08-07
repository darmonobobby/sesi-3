const router = require('express').Router();
const dataBooks = require("../data/books.json");

router.get("/", (req, res) => {
    res.send("");
})

router.get("/books", (req, res) => {
    res.send(JSON.stringify(dataBooks));
})

router.get("/books/(:id)", (req, res) => {
    let id = req.params.id;
    let findBook = dataBooks.find((item) => item.id === Number(id));
    res.send(JSON.stringify(findBook));
})

router.get('/ejs/books', (req, res) => {
    res.render('books', {isi : dataBooks});
})

module.exports = router;