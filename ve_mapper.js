var dots = require("dot").process({path: "./views"});

VeMapper = function () {
  this.render = function (endpointName) {
    return dots.mytemplate(require('./endpoints/' + endpointName));
  }
}

module.exports = new VeMapper();