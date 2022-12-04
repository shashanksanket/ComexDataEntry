'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "typeOfInstrumentBox" to table "datas"
 * addColumn "instrumentBoxProvided" to table "datas"
 * addColumn "instrumentBoxProvidedBy" to table "datas"
 * addColumn "Ont_OnuProvidedBy" to table "datas"
 *
 **/

var info = {
    "revision": 7,
    "name": "noname",
    "created": "2022-12-04T17:49:43.871Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "datas",
            "typeOfInstrumentBox",
            {
                "type": Sequelize.STRING,
                "field": "typeOfInstrumentBox",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "datas",
            "instrumentBoxProvided",
            {
                "type": Sequelize.STRING,
                "field": "instrumentBoxProvided",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "datas",
            "instrumentBoxProvidedBy",
            {
                "type": Sequelize.STRING,
                "field": "instrumentBoxProvidedBy",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "datas",
            "Ont_OnuProvidedBy",
            {
                "type": Sequelize.STRING,
                "field": "Ont_OnuProvidedBy",
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
