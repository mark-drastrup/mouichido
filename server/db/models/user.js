const bcrypt = require("bcrypt");

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type:DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      set(val) {
        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(val, salt);

        this.setDataValue('password', hash);
      }
    } 
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Entry);
  };
  return User;
};
