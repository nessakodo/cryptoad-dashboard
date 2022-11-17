Rails.application.routes.draw do

# Resources routes 
  resources :currencies
  resources :users
  resources :sessions, only: [:create]
  resources :bots
  resources :active_bots
  resources :memberships

# API routes
  scope '/api' do
    get 'coins/list' => 'coins#list'
    get 'coin_symbol/:id' => 'coins#symbol_lookup'
    resources :coins
    get 'positions/summary' => 'positions#summary'
    get 'positions/delete/:id' => 'positions#delete'
    resources :positions
    # post 'user_token' => 'user_token#create'
    # get 'whoami' => 'positions#whoami'
  end


  # Authenication routes
  post '/signup', to: 'users#create'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#logged_in"

  # Membership fetches
  post '/upgrade', to: "memberships#create"
  get '/status', to: "memberships#show"

   # Remove bot route
   delete "/remove", to: "bots#remove"

end
