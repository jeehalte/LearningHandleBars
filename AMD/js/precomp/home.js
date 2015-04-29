define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['home'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  stack1 = self.invokePartial(partials.header, 'header', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	"
    + "\n	Welcome back ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.userfy || depth0.userfy),stack1 ? stack1.call(depth0, depth0.name, options) : helperMissing.call(depth0, "userfy", depth0.name, options)))
    + "!\n";
  stack2 = self.invokePartial(partials.footer, 'footer', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });
});
