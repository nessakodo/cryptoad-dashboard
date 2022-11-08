class SessionsController < ApplicationController

    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok
        else
            render json: {error: "Invalid Credentials"}, status: :unauthorized
        end
      end

# Login
      def logged_in
        if current_user.valid?
          render json: current_user, status: :ok
        else
          render json: { 
            error: "User not logged in",
            logged_in: false,
            status: :unauthorized
          }
        end
      end
      
#   Logout
      def destroy
        session.delete :user_id
      end

end