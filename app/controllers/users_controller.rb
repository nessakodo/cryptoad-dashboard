class UsersController < ApplicationController
        
    def index
        users = User.all 
        render json: users, status: :ok
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, status: :accepted
    end

    
    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end


    def update
        user = User.find_by(id: params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    def destroy
        @user.destroy
    end

    def status
        status = Membership.where(membership_id: params[:membership], user_id: params[:user])
        status.update!(membership_params)
        render json: "you have successfully changed your membership plan", status: :accepted
    end

private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :membership)
    end
    
end
