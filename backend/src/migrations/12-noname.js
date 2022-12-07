'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "GM" to table "datas"
 * addColumn "AM" to table "oltps"
 *
 **/

var info = {
    "revision": 12,
    "name": "noname",
    "created": "2022-12-07T11:17:41.331Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "datas",
            "GM",
            {
                "type": Sequelize.STRING,
                "field": "GM",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "oltps",
            "AM",
            {
                "type": Sequelize.STRING,
                "field": "AM",
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
