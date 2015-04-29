define(['handlebars'], function(Handlebars) {
  Handlebars.helpers['userfy'] = function(name) {
    var username = name.toLowerCase().replace(/ /g, "_");
    Handlebars.logger.log(1, username);
    return username;
  };
  return Handlebars.helpers
});
