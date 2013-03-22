class CommentsController < ApplicationController
  before_filter :load_post

  respond_to :html, :json

  def index
    respond_with @post.comments
  end

  def create
    @comment = @post.comments.build(params[:comment])
    @comment.save
    respond_with [@post, @comment]
  end

  private

  def load_post
    @post = Post.find(params[:post_id])
  end
end
