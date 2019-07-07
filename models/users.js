/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    users_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    username_email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    pass_word: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: true
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false
    },
    kids_Name: {
      type:DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    tableName: 'users'
  });
};
