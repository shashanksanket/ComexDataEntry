'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "DateOfUninstallation" to table "datas"
 *
 **/

var info = {
    "revision": 2,
    "name": "added DateOfUninstallation",
    "created": "2022-11-27T18:40:48.612Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "datas",
        "DateOfUninstallation",
        {
            "type": Sequelize.STRING,
            "field": "DateOfUninstallation",
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
