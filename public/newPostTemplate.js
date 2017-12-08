(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['newPost'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"post\" data-price=\""
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "\" data-maxSeats=\""
    + alias4(((helper = (helper = helpers.maxSeats || (depth0 != null ? depth0.maxSeats : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxSeats","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"post-contents\">\n    <div class=\"post-image-container\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"post-detail-info-container\">\n      <p>Driver's Name: <span class=\"driver-name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></p>\n      <p>Maximum Available Seats: <span class=\"available-seats\">"
    + alias4(((helper = (helper = helpers.maxSeats || (depth0 != null ? depth0.maxSeats : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxSeats","hash":{},"data":data}) : helper)))
    + "</span></p>\n      <p>Price: $<span class=\"ride-price\">"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</span></p>\n      <p>License Plate Number: <span class=\"license-plate\">"
    + alias4(((helper = (helper = helpers.licenseNo || (depth0 != null ? depth0.licenseNo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"licenseNo","hash":{},"data":data}) : helper)))
    + "</span></p>\n    </div>\n	\n  </div>\n   <button type=\"button\" id=\"book-car-button\" class=\"car-action-button\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" >Book</button>\n</div>\n\n";
},"useData":true});
})();