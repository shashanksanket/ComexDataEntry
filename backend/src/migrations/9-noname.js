'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "op_stocks", deps: [users]
 *
 **/

var info = {
    "revision": 9,
    "name": "noname",
    "created": "2022-12-05T14:38:22.859Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "op_stocks",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "field": "id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            },
            "Title": {
                "type": Sequelize.STRING,
                "field": "Title",
                "allowNull": true
            },
            "amountSpent": {
                "type": Sequelize.INTEGER,
                "field": "amountSpent",
                "allowNull": true
            },
            "DateOfPayment": {
                "type": Sequelize.STRING,
                "field": "DateOfPayment",
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
