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

private

    def membership_params
        params.permit(:user:id)
    end

end
