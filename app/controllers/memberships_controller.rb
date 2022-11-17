class MembershipsController < Knock::AuthTokenController

    def create
        membership = Membership.create!(membership_params)
        render json: membership, status: :created
    end

    def show
        membership = Membership.find_by(id: params[:id])
        render json: membership, status: :accepted
    end

    def downgrade
        downgrade = Membership.where(user_id: params[:user_id]).destroy_all
        render json: "You have successfully downgraded to the free plan.", status: :accepted
    end

    def membership  
        if self.user.membership == false
          self.user.membership = true
        end
      end
    
    After self.user.membership = true add self.user.save

private

    def membership_params
        params.permit(:user_id)
    end

end
