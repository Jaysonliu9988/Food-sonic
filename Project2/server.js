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


const syncOptions = { force: true };

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
    //todo
    db.Items.bulkCreate([
      {
        item: "chefs selection for 2",
        price: 24,
        url:
          "https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        category: "entree",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "prawn delight",
        price: 18,
        url:
          "https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "entree",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "tuna with fragrant rice",
        price: 14,
        url:
          "https://images.unsplash.com/photo-1577004686904-1a4f118acf61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "entree",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "oysters kilpatrick",
        price: 18,
        url:
          "https://images.unsplash.com/photo-1572966431862-38b9dd0e397f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "entree",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "beef carpaccio",
        price: 16,
        url:
          "https://images.unsplash.com/photo-1562967915-5ca331d76a50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "entree",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "tomato bruschetta",
        price: 18,
        url:
          "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "entree",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "chicken pizza with caramelised red onion",
        price: 24,
        url:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "main",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "salmon with onions and asparagus",
        price: 36,
        url:
          "https://images.unsplash.com/photo-1560717845-968823efbee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "main",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "pasta in tomato sauce",
        price: 23,
        url:
          "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "main",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "spicy octopus with potatoes",
        price: 34,
        url:
          "https://images.unsplash.com/photo-1535980156496-87fc2cfcb832?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "main",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "scotch fillet with seasonal vegetables",
        price: 42,
        url:
          "https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "main",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "raspberry peach glazed lamb",
        price: 36,
        url:
          "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        category: "main",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "cookies and cream",
        price: 12,
        url:
          "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "dessert",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "chocolate overflow",
        price: 14,
        url:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "dessert",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "chocolate tart",
        price: 14,
        url:
          "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "dessert",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "salted caramel lava cake",
        price: 14,
        url:
          "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "dessert",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "mango and cherry pavlova",
        price: 14,
        url:
          "https://images.unsplash.com/photo-1549541238-00a925f38455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "dessert",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "blueberry pie",
        price: 12,
        url:
          "https://images.unsplash.com/photo-1476887334197-56adbf254e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "dessert",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "champagne moet and chandon",
        price: 19,
        url:
          "https://images.unsplash.com/photo-1531821945121-d55c446bd62f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "drinks",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "yering station chardonnay",
        price: 14,
        url:
          "https://images.unsplash.com/photo-1551622966-357737ef2797?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "drinks",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "famille sumeire rose",
        price: 12,
        url:
          "https://images.unsplash.com/photo-1546553295-2cb31e5db3b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "drinks",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "chameleon cabernet sauvigon merlot",
        price: 15,
        url:
          "https://images.unsplash.com/photo-1568907047661-1492520913f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "drinks",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "grahams port tawny",
        price: 12,
        url:
          "https://images.unsplash.com/photo-1577933747985-857c73495486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "drinks",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: "cognac",
        price: 15,
        url:
          "https://images.unsplash.com/photo-1579369542406-f30da2de34ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        category: "drinks",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  });
});

module.exports = app;
