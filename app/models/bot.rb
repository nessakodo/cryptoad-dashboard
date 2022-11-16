class Bot < ApplicationRecord
    has_many :active_bots
    has_many :users, through: :active_bots
  end
  