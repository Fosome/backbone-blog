window.Blog = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},

	init: function() {
		window.routerPosts = new Blog.Routers.Posts();
		Backbone.history.start();
	}
}

$(function() {
	Blog.init();
});
