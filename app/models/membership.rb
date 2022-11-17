class Membership < ApplicationRecord

    belongs_to :user

    attribute :type, :boolean, default: false

end
