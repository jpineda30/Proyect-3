const router = require("express").Router();
const apiR = require("./api");

router.use("/api", apiR);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.json("whtevr");
  });
  
  


module.exports = router;


// const router = require("express").Router();
// const booksController = require("../../controllers/booksController");

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

// module.exports = router;