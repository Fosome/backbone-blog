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

	render: function() {
		this.$el.html(this.template({ post: this.model }));
		return this;
	},

	show: function(post) {
		this.model = post;
		post.on("all", this.render, this);
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
