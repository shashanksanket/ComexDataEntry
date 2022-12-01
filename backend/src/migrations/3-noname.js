'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "DateOfUninstallation" from table "datas"
 * addColumn "contactNumber" to table "datas"
 *
 **/

var info = {
    "revision": 3,
    "name": "noname",
    "created": "2022-12-01T14:43:45.935Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["datas", "DateOfUninstallation"]
    },
    {
        fn: "addColumn",
        params: [
            "datas",
            "contactNumber",
            {
                "type": Sequelize.STRING,
                "field": "contactNumber",
                "allowNull": true
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
