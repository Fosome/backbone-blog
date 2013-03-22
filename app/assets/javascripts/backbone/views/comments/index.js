Blog.Views.CommentIndex = Backbone.View.extend({
	el: "#post_comments",
	template: JST["templates/comments/list"],

	initialize: function() {
		this.options.collection.on("sync", this.render, this);
	},

	render: function() {
		console.log("rendering post comments#index");

		this.$el.html(this.template({ comments: this.options.collection.models }));
		return this;
	},
});
