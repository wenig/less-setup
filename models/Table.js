var Model = require('moron').Model;

function Table() {
  Model.apply(this, arguments);
}

Model.extend(Table);
module.exports = Table;

Table.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};

Table.tableName = 'Table';

Table.jsonSchema = {
  type: 'object',
  required: ['firstName', 'lastName'],

  properties: {
    id: {type: 'integer'},
    firstName: {type: 'string', minLength: 1, maxLength: 255},
    lastName: {type: 'string', minLength: 1, maxLength: 255},
    age: {type: 'number'},
  }
};