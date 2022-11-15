Rails.application.routes.draw do
  # All routes 
  resources :users
  resources :sessions, only: [:create]
  resources :added_coins

  # Test
  get '/hello', to: 'application#hello_world'

  # Authenication Routes
  post '/signup', to: 'users#create'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#logged_in"


end
