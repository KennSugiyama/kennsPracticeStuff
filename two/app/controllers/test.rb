get "/posts" do
  @posts = Post.order("created_at DESC")
  erb :'posts/index'
end

post "/posts" do
  @post = Post.new(params[:post])
  if @post.save
    if request.xhr?
      p "HITTTING THE ROUT"
      erb :'posts/_post', layout: false, locals: {post: @post}
    else
      redirect "posts/#{@post.id}"
    end
  else
     #program should have an errors partial to communicate with user about faulty input data
    @errors = @post.errors.full_messages
  end
end

get "/posts/new" do
  @post = Post.new
  erb :'posts/new'
end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end

put "/posts/:id/like" do
  @post = Post.find(params[:id])
  @post.increment!(:likes_count)
  if request.xhr?
    @post.likes_count.to_json
  else
  redirect "/posts/#{@post.id}"
  end
end
