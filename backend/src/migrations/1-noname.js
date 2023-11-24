'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "datas", deps: []
 * createTable "oltps", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2023-11-24T18:49:36.491Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "datas",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "Name": {
                    "type": Sequelize.STRING,
                    "field": "Name",
                    "allowNull": true
                },
                "Address": {
                    "type": Sequelize.STRING,
                    "field": "Address",
                    "allowNull": true
                },
                "CaNo": {
                    "type": Sequelize.STRING,
                    "field": "CaNo",
                    "allowNull": true
                },
                "TelNo": {
                    "type": Sequelize.STRING,
                    "field": "TelNo",
                    "allowNull": true
                },
                "Plan": {
                    "type": Sequelize.STRING,
                    "field": "Plan",
                    "allowNull": true
                },
                "TypeOfPlan": {
                    "type": Sequelize.STRING,
                    "field": "TypeOfPlan",
                    "allowNull": true
                },
                "DateOfInstallation": {
                    "type": Sequelize.STRING,
                    "field": "DateOfInstallation",
                    "allowNull": true
                },
                "TypeOfConnection": {
                    "type": Sequelize.STRING,
                    "field": "TypeOfConnection",
                    "allowNull": true
                },
                "VoipIpAddress": {
                    "type": Sequelize.STRING,
                    "field": "VoipIpAddress",
                    "allowNull": true
                },
                "VlanId": {
                    "type": Sequelize.STRING,
                    "field": "VlanId",
                    "allowNull": true
                },
                "AM": {
                    "type": Sequelize.STRING,
                    "field": "AM",
                    "allowNull": true
                },
                "OltId": {
                    "type": Sequelize.STRING,
                    "field": "OltId",
                    "allowNull": true
                },
                "OltName": {
                    "type": Sequelize.STRING,
                    "field": "OltName",
                    "allowNull": true
                },
                "PonNo": {
                    "type": Sequelize.STRING,
                    "field": "PonNo",
                    "allowNull": true
                },
                "Ont_Onu_Sn_Macadress": {
                    "type": Sequelize.STRING,
                    "field": "Ont_Onu_Sn_Macadress",
                    "allowNull": true
                },
                "contactNumber": {
                    "type": Sequelize.STRING,
                    "field": "contactNumber",
                    "allowNull": true
                },
                "dateOfUninstallation": {
                    "type": Sequelize.STRING,
                    "field": "dateOfUninstallation",
                    "allowNull": true
                },
                "Active": {
                    "type": Sequelize.BOOLEAN,
                    "field": "Active",
                    "allowNull": true,
                    "defaultValue": true
                },
                "Ont_OnuProvidedBy": {
                    "type": Sequelize.STRING,
                    "field": "Ont_OnuProvidedBy",
                    "allowNull": true
                },
                "instrumentBoxProvidedBy": {
                    "type": Sequelize.STRING,
                    "field": "instrumentBoxProvidedBy",
                    "allowNull": true
                },
                "instrumentBoxProvided": {
                    "type": Sequelize.STRING,
                    "field": "instrumentBoxProvided",
                    "allowNull": true
                },
                "GM": {
                    "type": Sequelize.STRING,
                    "field": "GM",
                    "allowNull": true
                },
                "typeOfInstrumentBox": {
                    "type": Sequelize.STRING,
                    "field": "typeOfInstrumentBox",
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "oltps",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "OltName": {
                    "type": Sequelize.STRING,
                    "field": "OltName",
                    "allowNull": true
                },
                "GM": {
                    "type": Sequelize.STRING,
                    "field": "GM",
                    "allowNull": true
                },
                "OltId": {
                    "type": Sequelize.STRING,
                    "field": "OltId",
                    "allowNull": true
                },
                "ponNo": {
                    "type": Sequelize.STRING,
                    "field": "ponNo",
                    "allowNull": true
                },
                "startRange": {
                    "type": Sequelize.INTEGER,
                    "field": "startRange",
                    "allowNull": true
                },
                "endRange": {
                    "type": Sequelize.INTEGER,
                    "field": "endRange",
                    "allowNull": true
                },
                "AM": {
                    "type": Sequelize.STRING,
                    "field": "AM",
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "firstName": {
                    "type": Sequelize.STRING,
                    "field": "firstName",
                    "allowNull": false
                },
                "lastName": {
                    "type": Sequelize.STRING,
                    "field": "lastName",
                    "allowNull": false
                },
                "phoneNumber": {
                    "type": Sequelize.STRING,
                    "field": "phoneNumber",
                    "allowNull": false
                },
                "password": {
                    "type": Sequelize.STRING,
                    "field": "password",
                    "allowNull": false
                },
                "email": {
                    "type": Sequelize.STRING,
                    "field": "email",
                    "unique": true,
                    "allowNull": false
                },
                "role": {
                    "type": Sequelize.STRING,
                    "field": "role",
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
