class CoinsController < ApplicationController
    def index
    end
  
    def search
      render json: { coins: coins }
    end
  
    # Takes in the coin id and the amount owned
    # Returns final calculations
    def calculate
      amount = params[:amount]
  
      render json: {
        coin: coin,
        current_price: coin.current_price,
        amount: amount,
        value: coin.calculate_value(amount)
      }
    end
  
    private
  
    def coin
      @coin ||= coin.find(params[:id])
    end
  
    def coins
      @coins ||= coin.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
    end
  end