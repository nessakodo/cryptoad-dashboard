class MembershipsController < Knock::AuthTokenController

    def index
        memberships = Membership.all 
        render json: memberships, status: :ok
    end


    def create
        membership = Membership.create!(user_id: params[:user_id])
        render json: membership, status: :created
    end

    def show
        membership = Membership.find_by(params[:user_id])
        render json: membership, status: :accepted
    end

    def update
        update = Membership.find_by(params[:user_id])
        update.update!(membership_params)
        render json: "You have successfully changed your membership plan.", status: :accepted
    end

    # def membership  
    #     if self.user.membership == false
    #       self.user.membership = true
    #     end
    #   end
    
    # After self.user.membership = true add self.user.save

private

    def membership_params
        params.permit(:type)
    end

end
