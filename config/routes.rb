BackboneBlog::Application.routes.draw do
  resources :posts

  root :to => "home#show"
end
