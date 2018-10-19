'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    title: DataTypes.STRING,
    short_description: DataTypes.STRING,
    tag: DataTypes.STRING,
    url: DataTypes.STRING,
    grammar: DataTypes.TEXT,
    sentences: DataTypes.TEXT
  }, {});
  Entry.associate = function(models) {
    // associations can be defined here
    Entry.belongsTo(models.User);
  };
  return Entry;
};