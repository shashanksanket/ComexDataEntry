'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "Active" to table "datas"
 *
 **/

var info = {
    "revision": 6,
    "name": "noname",
    "created": "2022-12-04T04:23:03.958Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "datas",
        "Active",
        {
            "type": Sequelize.BOOLEAN,
            "field": "Active",
            "allowNull": true,
            "defaultValue": true
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
