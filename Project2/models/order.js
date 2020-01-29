module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    itemID: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    tableID: DataTypes.INTEGER
  },
  {
    classMethods: {
      associate: function(models) {
        table.belongsTo(models.table);
      }
    }
  }
  );
  return Order;
};
