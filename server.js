require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
//Do I need to add the partials to this as well
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/layouts/partials"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

const syncOptions = { force: true };

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );

    db.Items.bulkCreate([
      {
        item: "Bachi Burger",
        price: 1,
        url: "https://images.unsplash.com/photo-1577004686904-1a4f118acf61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "entree",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "Brindle Burger",
        price: 12,
        url: "https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        category: "entree",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "Americana Burger",
        entree: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "The Company Burger",
        entree: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "The Counter Burger",
        entree: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "The Emmy Burger",
        entree: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "Classic Burger",
        entree: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "Husk Burger",
        entree: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "Velveeta Burger",
        entree: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "Kua Aina Burger",
        entree: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "Waffle Fries",
        entree: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "Onion Rings",
        entree: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "Cole Slaw & House Fries",
        entree: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "Chocolate Mint Milk Shake",
        entree: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "Vanilla Milk Shake",
        entree: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "Blackberry Milk Shake",
        entree: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "Cookes and Cream Milk Shake",
        entree: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  });
});

module.exports = app;
