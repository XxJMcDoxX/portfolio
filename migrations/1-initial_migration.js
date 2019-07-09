'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2019-07-09T23:27:55.251Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "users",
        {
            "users_id": {
                "type": Sequelize.INTEGER(5),
                "field": "users_id",
                "primaryKey": true,
                "allowNull": false
            },
            "first_name": {
                "type": Sequelize.STRING(45),
                "field": "first_name",
                "allowNull": false
            },
            "last_name": {
                "type": Sequelize.STRING(45),
                "field": "last_name",
                "allowNull": false
            },
            "username_email": {
                "type": Sequelize.STRING(45),
                "field": "username_email",
                "allowNull": false
            },
            "pass_word": {
                "type": Sequelize.STRING(45),
                "field": "pass_word",
                "unique": true,
                "allowNull": true
            },
            "last_update": {
                "type": Sequelize.DATE,
                "field": "last_update",
                "allowNull": false
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
