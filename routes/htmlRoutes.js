var db = require("../models");

module.exports = function(app) {
  // Load home page
  app.get("/", function(req, res) {
    db.Items.findAll({}).then(function(dbItems) {
      res.render("index", {
        title: "Food Sonic!",
        category: dbItems
      });
    });
  });

  // Load menu page and pass in an item by title
  app.get("/items/:item", function(req, res) {
    db.Items.findOne({ where: { item: req.params.item } }).then(function(
      dbItems
    ) {
      res.render("menu", {
        food: [dbItems.dataValues]
      });
    });
  });

  // Load menu page and pass in an item by price
  app.get("/items/ :price", function(req, res) {
    db.Items.findOne({ where: { price: req.params.price } }).then(function(
      dbItems
    ) {
      res.render("menu", {
        food: [dbItems.dataValues]
      });
    });
  });

  // Load menu page and pass in an item url picture
  app.get("/items/ :url", function(req, res) {
    db.Items.findOne({ where: { url: req.params.url } }).then(function(
      dbItems
    ) {
      res.render("menu", {
        food: [dbItems.dataValues]
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
