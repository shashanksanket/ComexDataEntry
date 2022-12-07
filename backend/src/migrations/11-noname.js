'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * dropTable "op_stocks"
 * dropTable "opconfigs"
 *
 **/

var info = {
    "revision": 11,
    "name": "noname",
    "created": "2022-12-07T10:42:04.136Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "dropTable",
        params: ["op_stocks"]
    },
    {
        fn: "dropTable",
        params: ["opconfigs"]
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
