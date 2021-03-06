class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index_wall
    @posts = Post.find_by_wall_id(params[:id]).with_stuff
    render :index
  end

  def index_feed
    @posts = Post.find_by_friends_of_user(current_user.id)
    render :index
  end

  def update
    @post = Post.find(params[:id])
    @post.update_attributes(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show
  end

  def post_params
    params.require(:post).permit(:author_id, :wall_id, :body)
  end
end
