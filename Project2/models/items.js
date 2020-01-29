module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define(
    "Items",
    {
      item: DataTypes.STRING,
      price: DataTypes.INTEGER,
      url: DataTypes.TEXT,
      category: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          table.belongsTo(models.order);
        }
      }
    }
  );
  return Items;
};
