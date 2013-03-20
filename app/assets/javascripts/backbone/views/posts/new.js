Blog.Views.PostNew = Backbone.View.extend({
	el: "#bb_content",
	template: JST["templates/posts/new"],

	events: {
		"click #save_post": "save"
	},

	initialize: function() {
		_.bindAll(this, "success", "error");
	},

	render: function() {
		this.$el.html(this.template());
		return this;
	},

	save: function(e) {
		e.preventDefault();

		var attrs = {
			title: this.$("#post_title").val(),
			author: this.$("#post_author").val(),
			body: this.$("#post_body").val()
		};

		this.options.collection.create(attrs, {
			wait: true,
			success: this.success, 
			error: this.error
		});
	},

	success: function(model, response, options) {
		this.options.router.navigate("#/posts/" + model.get('id'), { trigger: true });
	},

	error: function(model, xhr, options) {
		$("#form_errors").html("Server response: " + xhr.responseText);
	}
});
