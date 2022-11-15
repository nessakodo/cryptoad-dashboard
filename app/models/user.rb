class User < ApplicationRecord
    
    has_secure_password 
    
    has_many :added_coins, dependent: :destroy

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
 
end
