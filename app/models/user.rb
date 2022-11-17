class User < ApplicationRecord
    
    has_secure_password 
    
    has_one :membership

    has_many :active_bots, dependent: :destroy
    has_many :bots, through: :active_bots
    has_many :positions, dependent: :destroy

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
 
    def membership?
        membership.present?
    end

end
