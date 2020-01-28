var db = require("../models");
var _ = require("lodash");

module.exports = function(app) {
  // Load home page
  app.get("/", function(req, res) {
    db.Items.findAll({}).then(function(dbItems) {
      res.render("index", {
        title: "Food Sonic!",
        food: dbItems
      });
    });
  });



  app.get("/items/all", function(req, res) {
    db.Items.findAll({}).then(function(dbItems) {
      chunkedData = _.chunk(dbItems, 3);
      res.render("menu", {
        food: chunkedData
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
