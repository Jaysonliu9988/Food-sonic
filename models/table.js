module.exports = function(sequelize, DataTypes) {
  var Table = sequelize.define("Table", {
    name: DataTypes.STRING
  });

  return Table;
};
