'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category.init({
    category_id: DataTypes.INTEGER,
    category: DataTypes.STRING,
    subcategory_id: DataTypes.INTEGER,
    subcategory: DataTypes.STRING,
    description: DataTypes.STRING,
    enabled: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
    timestamps: false
  });
  return category;
};