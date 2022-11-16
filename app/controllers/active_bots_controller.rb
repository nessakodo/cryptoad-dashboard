class ActiveBotsController < ApplicationController


    def index 
        render json: ActiveBot.all
    end

    def show
        active = ActiveBot.find(params[:id])
        render json: active, status: :ok
    end

    def create
        active = ActiveBot.create(active_params)
        render json: active, status: :created
    end

    def destroy
        active = ActiveBot.find(params[:id])
        active.destroy
    end

private

    def active_params
        params.permit(:user_id, :bot_id, :active)
    end
end