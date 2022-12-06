'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "opconfigs", deps: [users]
 *
 **/

var info = {
    "revision": 10,
    "name": "noname",
    "created": "2022-12-06T02:11:49.102Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "opconfigs",
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
            "totalAmountGiven": {
                "type": Sequelize.INTEGER,
                "field": "totalAmountGiven",
                "allowNull": true
            },
            "totalAmountLeft": {
                "type": Sequelize.INTEGER,
                "field": "totalAmountLeft",
                "allowNull": true
            },
            "lastUpdateAt": {
                "type": Sequelize.STRING,
                "field": "lastUpdateAt",
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
            },
            "userId": {
                "type": Sequelize.INTEGER,
                "field": "userId",
                "onUpdate": "CASCADE",
                "onDelete": "SET NULL",
                "references": {
                    "model": "users",
                    "key": "id"
                },
                "allowNull": true
            }
        },
        {}
    ]
}];

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
