Blog.Routers.Posts = Backbone.Router.extend({
	self: this,
	routes: {
		"" : "index",
		"posts": "index",
		"posts/new": "new",
		"posts/:id": "show",
		"posts/:id/edit": "edit"
	},

	initialize: function() {
		self.posts = new Blog.Collections.Posts();

		self.show_view = new Blog.Views.PostShow({
			router: this
		});

		self.new_view = new Blog.Views.PostNew({
			collection: self.posts,
			router: this
		});

		self.edit_view = new Blog.Views.PostEdit({
			router: this
		});
	},

	index: function() {
		console.log("rendering post#index");

		self.posts.fetch();

		var index_view = new Blog.Views.PostIndex({
			collection: self.posts
		});
	},

	new: function() {
		console.log("rendering post#new");

		self.new_view.render();
	},

	show: function(id) {
		console.log("rendering post#show");

		var post = new Blog.Models.Post({ id: id });
		post.fetch();

		self.show_view.show(post);
	},

	edit: function(id) {
		console.log("rendering post#edit");

		var post = new Blog.Models.Post({ id: id });
		post.fetch();

		self.edit_view.edit(post);
	}
});
