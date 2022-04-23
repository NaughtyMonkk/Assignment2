const model = require("../models/model");

module.exports = {
  getbooks: (req, res) => {
    model
      .find({})
      .then((books) => {
        res.render("home", {
          books: books,
        });
      })
      .catch((error) => {
        console.log(`Error fetching books:${error.message}`);
      });
  },
  getbook: (req, res, next) => {
    let bkID = req.params.number;
    console.log(bkID);

    model
      .findById(bkID)
      .then((newbk) => {
        res.locals.newbk = newbk;
        console.log(newbk);

        res.render("bk", { books: newbk });
      })
      .catch((error) => {
        console.log(`Error fetching book ID : ${error.message}`);
        next(error);
      });
  },
  deletePage: (req, res) => {
    model
      .find({})
      .then((books) => {
        res.render("bkdelete", {
          books: books,
        });
      })
      .catch((error) => {
        console.log(`Error fetching books:${error.message}`);
      });
  },

  produceBook: (req, res, next) => {
    let bookParam = {
      name: req.body.name,
      author: req.body.name,
      link: req.body.link,
    };
    // insert it in the database coming from the form
    model.create(bookParam);
    res.redirect("/home");
  },

  delete: (req, res, next) => {
    let bkID = req.params.number;
    model.findByIdAndRemove(bkID, (error) => {
      if (error) next(error);
      res.redirect("/home");
    });
  },
};
