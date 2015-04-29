define([], function(){
  return function(name) {
    var username = name.toLowerCase().replace(/ /g, "_");
    Handlebars.logger.log(1, username);
    return username;
  }
});
