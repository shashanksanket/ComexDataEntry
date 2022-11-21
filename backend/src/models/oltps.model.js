// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  let sequelizeClient = app;
  if (typeof app.get !== "undefined" && typeof app.get === "function") {
    sequelizeClient = app.get("sequelizeClient");
  }
  const oltps = sequelizeClient.define('oltps', {
    OltName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OltId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ponNo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startRange: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    endRange: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  oltps.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return oltps;
};
