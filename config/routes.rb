Rails.application.routes.draw do

# Resources routes 
  resources :currencies
  resources :users
  resources :sessions, only: [:create]
  resources :bots
  resources :active_bots
  resources :memberships


scope '/api' do
    get 'coins/list' => 'coins#list'
    get 'coin_symbol/:id' => 'coins#symbol_lookup'
    resources :coins
    get 'positions/summary' => 'positions#summary'
    get 'positions/delete/:id' => 'positions#delete'
    resources :positions
  end

  get '/active_bots', to: 'bots#show'
  get '/memberships', to: 'memberships#show'
  post '/memberships', to: 'memberships#create'

  # Authenication routes
  post '/signup', to: 'users#create'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#logged_in"

  patch "/status", to: "users#status"

  # Membership fetches
  # post '/upgrade', to: "memberships#create"
  # get '/status', to: "memberships#show"

   # Remove bot route
   delete "/remove", to: "bots#remove"

end
