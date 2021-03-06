'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    title: DataTypes.STRING,
    short_description: DataTypes.STRING,
    tag: DataTypes.STRING,
    url: DataTypes.STRING,
    grammar: DataTypes.TEXT,
    sample_romaji: DataTypes.TEXT,
    sample_kana: DataTypes.TEXT,
    is_reviewed: DataTypes.BOOLEAN
  }, {});
  Entry.associate = function(models) {
    // associations can be defined here
    Entry.belongsTo(models.User);
  };
  return Entry;
};