Blog.Models.Comment = Backbone.Model.extend({
	url: function() {
		return "/posts/" + this.get('post_id') + "/comments";
	},

	defaults: {
		post_id: null,
		body: null
	}
});

Blog.Collections.Comments = Backbone.Collection.extend({
	model: Blog.Models.Comment,

	initialize: function(model, options) {
		this.post_id = options.post_id;
	},

	url: function() {
		return "/posts/" + this.post_id + "/comments";
	}
});
