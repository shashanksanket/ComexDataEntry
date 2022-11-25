'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "text" from table "users"
 * addColumn "email" to table "users"
 * addColumn "password" to table "users"
 * addColumn "phoneNumber" to table "users"
 * addColumn "lastName" to table "users"
 * addColumn "firstName" to table "users"
 *
 **/

var info = {
    "revision": 4,
    "name": "noname",
    "created": "2022-11-25T18:07:24.029Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["users", "text"]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "email",
            {
                "type": Sequelize.STRING,
                "field": "email",
                "unique": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "password",
            {
                "type": Sequelize.STRING,
                "field": "password",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "phoneNumber",
            {
                "type": Sequelize.STRING,
                "field": "phoneNumber",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "lastName",
            {
                "type": Sequelize.STRING,
                "field": "lastName",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "firstName",
            {
                "type": Sequelize.STRING,
                "field": "firstName",
                "allowNull": false
            }
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
