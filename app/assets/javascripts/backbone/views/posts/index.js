Blog.Views.PostIndex = Backbone.View.extend({
	el: "#bb_content",
	template: JST["templates/posts/table"],

	initialize: function() {
		this.options.collection.on("all", this.render, this);
	},

	render: function() {
		this.$el.html(this.template({ posts: this.options.collection.models }));
		return this;
	}
});
