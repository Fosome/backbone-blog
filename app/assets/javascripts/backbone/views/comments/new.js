Blog.Views.CommentNew = Backbone.View.extend({
	el: "#new_post_comment",
	template: JST["templates/comments/new"],

	events: {
		"click #save_comment": "save"
	},

	initialize: function() {
		_.bindAll(this, "success", "error");
	},

	render: function() {
		console.log("rendering post comment#new");

		this.$el.html(this.template({}));
		return this;
	},

	save: function(e) {
		e.preventDefault();

		var attrs = {
			body: this.$("#comment_body").val(),
			post_id: this.options.collection.post_id
		};

		var comment = new Blog.Models.Comment(attrs);

		this.options.collection.create(comment, {
			wait: true,
			success: this.success, 
			error: this.error
		});
	},

	success: function() {
		$("#comment_body").val("");
	},

	error: function() {
		console.log("error creating comment");
	}
});
