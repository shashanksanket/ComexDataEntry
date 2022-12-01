// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  let sequelizeClient = app;
  if (typeof app.get !== "undefined" && typeof app.get === "function") {
    sequelizeClient = app.get("sequelizeClient");
  }
  const datas = sequelizeClient.define('datas', {
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CaNo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TelNo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Plan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TypeOfPlan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DateOfInstallation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TypeOfConnection: {
      type: DataTypes.STRING,
      allowNull: true
    },
    VoipIpAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    VlanId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OltId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OltName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PonNo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Ont_Onu_Sn_Macadress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateOfUninstallation:{
      type: DataTypes.STRING,
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
  datas.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return datas;
};
