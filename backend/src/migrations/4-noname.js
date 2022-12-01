'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "dateOfUninstallation" to table "datas"
 *
 **/

var info = {
    "revision": 4,
    "name": "noname",
    "created": "2022-12-01T14:47:51.689Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "datas",
        "dateOfUninstallation",
        {
            "type": Sequelize.STRING,
            "field": "dateOfUninstallation",
            "allowNull": true
        }
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
