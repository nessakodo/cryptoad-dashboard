class MembershipsController < Knock::AuthTokenController

    def create
        membership = Membership.create!(membership_params)
        render json: membership, status: :created
    end

    def show
        membership = Membership.find_by(id: params[:id])
        render json: membership, status: :accepted
    end

    def update
        downgrade = Membership.where(user_id: params[:user_id]).update!(membership_params)
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
        params.permit(:membership, :user_id)
    end

end
