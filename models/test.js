/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test', {
    idTest: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Test_Name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'test'
  });
};
