class AddedCoinsController < ApplicationController


    def index 
        render json: AddedCoin.all
    end

    def show
        add = AddedCoin.find(params[:id])
        render json: add, status: :ok
    end

    def create
        add = AddedCoin.create(added_params)
        render json: add, status: :created
    end

    def destroy
        add = AddedCoin.find(params[:id])
        add.destroy
    end

private

    def added_params
        params.permit(:user_id, :coin_id, :added)
    end
end