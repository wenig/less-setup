var interpol = require('interpol');
var fs = require('fs');

require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

VeMapper = function () {
  this.render = function (endpointName) {
    template = interpol(require('./views/' + endpointName + '.html'));
    return template(require('./endpoints/' + endpointName));
  }
}

module.exports = new VeMapper();