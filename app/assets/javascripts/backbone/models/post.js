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
	},

	comments: function() {
		return new Blog.Collections.Comments([], { post_id: this.get('id') });
	}
});

Blog.Collections.Posts = Backbone.Collection.extend({
	url: "/posts",
	model: Blog.Models.Post
});
