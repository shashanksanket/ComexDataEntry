'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "GM" from table "datas"
 * removeColumn "AM" from table "oltps"
 * addColumn "AM" to table "datas"
 * addColumn "GM" to table "oltps"
 *
 **/

var info = {
    "revision": 13,
    "name": "changed name of AM and GM",
    "created": "2022-12-13T17:51:44.643Z",
    "comment": ""
};

var migrationCommands = [
    // {
    //     fn: "removeColumn",
    //     params: ["datas", "GM"]
    // },
    // {
    //     fn: "removeColumn",
    //     params: ["oltps", "AM"]
    // },
    {
        fn: "addColumn",
        params: [
            "datas",
            "AM",
            {
                "type": Sequelize.STRING,
                "field": "AM",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "oltps",
            "GM",
            {
                "type": Sequelize.STRING,
                "field": "GM",
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
