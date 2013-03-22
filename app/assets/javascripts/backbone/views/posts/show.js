Blog.Views.PostShow = Backbone.View.extend({
	el: "#bb_content",
	template: JST["templates/posts/show"],
	model: null,

	events: {
		"click .delete-link": "delete"
	},

	initialize: function() {
		_.bindAll(this, "deleteSuccess", "deleteError");
	},

	show: function(post) {
		this.model = post;
		post.on("sync", this.render, this);
	},

	render: function() {
		this.$el.html(this.template({ post: this.model }));

		// render comments
		var comments = this.model.comments();
		comments.fetch();
		var comments_index = new Blog.Views.CommentIndex({
			collection: comments
		});

		// render new comment form
		var comment_new = new Blog.Views.CommentNew({
			collection: comments
		});
		comment_new.render();

		return this;
	},

	delete: function(e) {
		e.preventDefault();

		this.model.destroy({
			success: this.deleteSuccess,
			error: this.deleteError
		});
	},

	deleteSuccess: function() {
		this.options.router.navigate("#/posts", { trigger: true });
	},

	deleteError: function() {
		alert("There was an error deleting this post");
	}
});
