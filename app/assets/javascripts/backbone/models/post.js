Blog.Models.Post = Backbone.Model.extend({
	urlRoot: "/posts",

	defaults: {
		title: null,
		author: null,
		body: null
	},

	validate: function(attrs, options) {
		if (attrs.name == "") {
			return { name: "required" }
		}
	}
});

Blog.Collections.Posts = Backbone.Collection.extend({
	url: "/posts",
	model: Blog.Models.Post
});
