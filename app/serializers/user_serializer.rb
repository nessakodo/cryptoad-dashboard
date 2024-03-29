class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :membership

  # has_one :membership 
  has_one :membership
  has_many :positions
  has_many :active_bots
  has_many :bots

end
