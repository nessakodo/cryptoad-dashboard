Rails.application.routes.draw do

# API routes
  scope '/api' do
    get 'coins/list' => 'coins#list'
    get 'coin_symbol/:id' => 'coins#symbol_lookup'
    resources :coins
    get 'positions/summary' => 'positions#summary'
    get 'positions/delete/:id' => 'positions#delete'
    resources :positions
    # post 'user_token' => 'user_token#create'
    get 'whoami' => 'positions#whoami'
  end


  root 'currencies#index'
  post 'search', to: 'currencies#search'
  post 'calculate', to: 'currencies#calculate'

  # User routes 
  resources :currencies
  resources :users
  resources :sessions, only: [:create]

  # Authenication routes
  post '/signup', to: 'users#create'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#logged_in"


end
