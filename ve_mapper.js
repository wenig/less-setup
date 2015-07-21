var dots = require("dot").process({path: "./views"});

VeMapper = function () {
  this.render = function (endpointName) {
    return eval("dots." + endpointName + "(require('./endpoints/" + endpointName + "'))");
  }
}

module.exports = new VeMapper();