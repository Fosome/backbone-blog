Blog.Views.PostEdit = Backbone.View.extend({
	el: "#bb_content",
	template: JST["templates/posts/edit"],
	model: null,

	events: {
		"click #update_post": "update"
	},

	initialize: function() {
		_.bindAll(this, "success", "error");
	},

	render: function() {
		this.$el.html(this.template({ post: this.model }));
		return this;
	},

	edit: function(post) {
		this.model = post;
		post.on("all", this.render, this);
	},

	update: function(e) {
		e.preventDefault();

		var attrs = {
			title: this.$("#post_title").val(),
			author: this.$("#post_author").val(),
			body: this.$("#post_body").val()
		};

		this.model.save(attrs, {
			success: this.success,
			error: this.error
		});
	},

	success: function(model, response, options) {
		console.log("Success");

		this.options.router.navigate("#/posts/" + model.get('id'), { trigger: true });
	},

	error: function(model, xhr, options) {
		console.log("Error");

		$("#form_errors").html("Server response: " + xhr.responseText);
	}
});
