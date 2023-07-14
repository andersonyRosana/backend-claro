'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      report.hasOne(models.feedback);
    }
  }
  report.init({
    category: DataTypes.INTEGER,
    subcategory: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    customer_reported: DataTypes.STRING,
    assignment: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    frequency: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    creationDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'report',
    timestamps: false,
  });
  return report;
};