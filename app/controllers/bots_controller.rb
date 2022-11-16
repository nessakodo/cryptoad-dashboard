class BotsController < ApplicationController

#   before_action :authenticate_user
#   before_action :set_positions, only: [:index, :summary, :delete]

def index 
    render json: Bot.all, status: :ok
end

def show
    bot = Bot.find_by(id: params[:id])
    render json: bot, status: :accepted
end


def remove
    bot = ActiveBot.where(bot_id: params[:bot], user_id: params[:user])
    bot.destroy_all
    render json: "you have deactivated this bot", status: :accepted
end

end
